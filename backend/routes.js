const express = require('express');
const router = express.Router();
const CO2 = require('./co2.config');
const OpenAI = require('openai');
const fetch = require('node-fetch');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 🔹 ROTA PARA CALCULAR DISTÂNCIA REAL
router.post('/distancia', async (req, res) => {
  const { origem, destino } = req.body;

  try {
    // função para converter cidade em coordenadas
    async function geocode(cidade) {
      const url = `https://api.openrouteservice.org/geocode/search?api_key=${process.env.ORS_API_KEY}&text=${encodeURIComponent(cidade)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.features.length) {
        throw new Error('Cidade não encontrada');
      }

      return data.features[0].geometry.coordinates;
    }

    const origemCoords = await geocode(origem);
    const destinoCoords = await geocode(destino);

    const rotaUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.ORS_API_KEY}&start=${origemCoords}&end=${destinoCoords}`;
    const rotaResp = await fetch(rotaUrl);
    const rotaData = await rotaResp.json();

    const distanciaKm =
      rotaData.features[0].properties.segments[0].distance / 1000;

    res.json({ distancia: distanciaKm.toFixed(1) });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao calcular distância' });
  }
});

// 🔹 ROTA DE EMISSÃO (continua igual)
router.post('/calcular', async (req, res) => {
  const { distancia, transporte } = req.body;

  if (!distancia || !transporte || !CO2[transporte]) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const emissao = (distancia * CO2[transporte]).toFixed(2);

  let dica = 'Considere opções de transporte mais sustentáveis.';

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `Uma viagem emitiu ${emissao} kg de CO2 usando ${transporte}. Dê uma dica curta para reduzir emissões futuras.`
        }
      ]
    });

    dica = response.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }

  res.json({ emissao, dica });
});

module.exports = router;
