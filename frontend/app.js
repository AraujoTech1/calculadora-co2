const origem = document.getElementById('origem');
const destino = document.getElementById('destino');
const distanciaInput = document.getElementById('distancia');
const resultado = document.getElementById('resultado');
const themeBtn = document.getElementById('toggle-theme');
const btnDistancia = document.getElementById('btn-distancia');

let transporteSelecionado = null;

// 🌙 Dark mode
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Modo claro'
    : '🌙 Modo escuro';
});

// 📏 DISTÂNCIA REAL
btnDistancia.addEventListener('click', async () => {
  if (!origem.value || !destino.value) {
    alert('Preencha origem e destino.');
    return;
  }

  btnDistancia.textContent = 'Calculando...';

  const response = await fetch('http://localhost:3000/api/distancia', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      origem: origem.value,
      destino: destino.value
    })
  });

  const data = await response.json();

  if (data.distancia) {
    distanciaInput.value = data.distancia;
  } else {
    alert('Erro ao calcular distância');
  }

  btnDistancia.textContent = '📏 Calcular distância';
});

// 🚗 Transporte
document.querySelectorAll('[data-type]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-type]')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    transporteSelecionado = btn.dataset.type;
  });
});

// ♻️ Calcular emissão
document.getElementById('calcular').addEventListener('click', async () => {
  const distancia = Number(distanciaInput.value);

  if (!distancia || !transporteSelecionado) {
    alert('Preencha todos os campos.');
    return;
  }

  const response = await fetch('http://localhost:3000/api/calcular', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      distancia,
      transporte: transporteSelecionado
    })
  });

  const data = await response.json();

  resultado.style.display = 'block';
  resultado.innerHTML = `
    Sua viagem emitiu aproximadamente <br>
    <strong>${data.emissao} kg de CO₂</strong>
    <hr>
    <em>${data.dica}</em>
  `;
});
