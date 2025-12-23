<div align="center">

# Calculadora de Emissão de CO₂ 🌱

![Status](https://img.shields.io/badge/Status-Finalizado-2d5016)
![JavaScript](https://img.shields.io/badge/JavaScript-gray?logo=javascript&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-gray?logo=github&logoColor=white)

</div>


## Descrição do Projeto

Este projeto consiste em uma Calculadora de Emissão de CO₂, desenvolvida para estimar a quantidade de dióxido de carbono emitida em viagens terrestres, de acordo com a distância percorrida e o meio de transporte utilizado.

A aplicação foi construída utilizando Node.js no backend e HTML, CSS e JavaScript no frontend, com integração de APIs externas para cálculo de distância real entre cidades e geração de dicas sustentáveis com inteligência artificial.

O projeto está completo e pronto para uso, porém, para que todas as funcionalidades funcionem corretamente, é necessário substituir as chaves de API de exemplo pelas suas próprias chaves.

🔑 OpenRouteService
A chave é criada gratuitamente em:
https://openrouteservice.org

A criação dessa chave é essencial para que o sistema consiga calcular a distância automaticamente entre cidades.

Essa API é utilizada para gerar dicas sustentáveis com inteligência artificial.

---

## Funcionalidades do Projeto

- Inserção da cidade de origem e destino.
- Cálculo automático da distância real entre cidades
- Seleção do meio de transporte:
  - Carro
  - Ônibus
  - Caminhão
  - Trem
- Cálculo da emissão estimada de CO₂
- Geração de dicas sustentáveis com auxílio da API do ChatGPT
- Interface moderna com modo claro e modo escuro

--- 

## Testes de Software

### ▪️ Teste de Depuração

- ✓  Verificação de erros no console do navegador e no terminal do Node.js
- ✓  Validação de respostas das APIs externas

### ▪️ Teste de Funcionamento

- ✓  Teste do cálculo de distância entre diferentes cidades 
- ✓  Teste do cálculo de emissão de CO₂ para todos os meios de transporte
- ✓  Teste da alternância entre modo claro e modo escuro

<div align="center">
  <img src="Imagem/Img01.png" alt="Imagem do teste" width="300">
  <p><i>Imagem do teste</i></p>
</div>


### ▪️ Teste de Segurança

- ✓  Uso de variáveis de ambiente (.env) para proteger chaves de API
- ✓  Arquivo `.env` incluído no `.gitignore`

---

## Tecnologias e Linguagens

![HTML5](https://img.shields.io/badge/HTML5-2d2d2d?style=plastic&logo=html5&logoColor=39FF14)
![CSS3](https://img.shields.io/badge/CSS3-2d2d2d?style=plastic&logo=css3&logoColor=39FF14)
![JavaScript](https://img.shields.io/badge/JavaScript-2d2d2d?style=plastic&logo=javascript&logoColor=39FF14)
![Node.js](https://img.shields.io/badge/Node.js-2d2d2d?style=plastic&logo=nodedotjs&logoColor=39FF14)
![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-2d2d2d?style=plastic&logo=githubcopilot&logoColor=39FF14)
![VSCode](https://img.shields.io/badge/VSCode-2d2d2d?style=plastic&logo=visualstudiocode&logoColor=39FF14)
![Git](https://img.shields.io/badge/Git-2d2d2d?style=plastic&logo=git&logoColor=39FF14)

---

## Bibliotecas e Frameworks

![Express.js](https://img.shields.io/badge/Express.js-2d2d2d?style=plastic&logo=express&logoColor=39FF14) — Criação do servidor backend

![node-fetch](https://img.shields.io/badge/node--fetch-2d2d2d?style=plastic&logo=node.js&logoColor=39FF14) — Consumo da API OpenRouteService

![OpenAI SDK](https://img.shields.io/badge/OpenAI_SDK-2d2d2d?style=plastic&logo=openai&logoColor=39FF14) — Integração com a API do ChatGPT

---

## Pré-requisitos e Instalação

### ▪️ Pré-requisitos

- Node.js instalado  
- Navegador web moderno

### ▪️ Instalação

**1.** Acesse a pasta backend
```bash
cd backend
```

**2.** Instale as dependências
```bash
npm install
```

**3.** Configure o arquivo `.env` com suas chaves de API
```env
OPENROUTE_API_KEY=sua_chave_aqui
OPENAI_API_KEY=sua_chave_aqui
```

**4.** Inicie o servidor
```bash
node server.js
```

**5.** Abra o arquivo `frontend/index.html` no navegador


## ▪️ Instruções de Uso

**1.** Abra o projeto no navegador  
**2.** Informe a cidade de origem e destino  
**3.** Clique em **"Calcular distância"**  
**4.** Escolha o meio de transporte  
**5.** Clique em **"Calcular emissão"**  
**6.** Visualize o resultado e a dica sustentável gerada pela IA

---

## Documentação Oficial:

- ![JavaScript](https://img.shields.io/badge/JavaScript-2d2d2d?style=plastic&logo=javascript&logoColor=39FF14) — https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

- ![HTML5](https://img.shields.io/badge/HTML5-2d2d2d?style=plastic&logo=html5&logoColor=39FF14) — https://developer.mozilla.org/pt-BR/docs/Web/HTML

- ![CSS3](https://img.shields.io/badge/CSS3-2d2d2d?style=plastic&logo=css3&logoColor=39FF14) — https://developer.mozilla.org/pt-BR/docs/Web/CSS

- ![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-2d2d2d?style=plastic&logo=githubcopilot&logoColor=39FF14) — https://docs.github.com/pt/copilot

- ![VSCode](https://img.shields.io/badge/VSCode-2d2d2d?style=plastic&logo=visualstudiocode&logoColor=39FF14) — https://code.visualstudio.com/docs

- ![Git](https://img.shields.io/badge/Git-2d2d2d?style=plastic&logo=git&logoColor=39FF14) — https://git-scm.com/doc

- ![Node.js](https://img.shields.io/badge/Node.js-2d2d2d?style=plastic&logo=nodedotjs&logoColor=39FF14) — https://nodejs.org

- ![Express.js](https://img.shields.io/badge/Express.js-2d2d2d?style=plastic&logo=express&logoColor=39FF14) — https://expressjs.com

- ![OpenAI SDK](https://img.shields.io/badge/OpenAI_SDK-2d2d2d?style=plastic&logo=openai&logoColor=39FF14) — https://platform.openai.com

- ![OpenRouteService](https://img.shields.io/badge/OpenRouteService-2d2d2d?style=plastic&logo=openstreetmap&logoColor=39FF14) — https://openrouteservice.org



---

<div align="center">

###  Desenvolvido com propósito 

*Projeto educacional focado em sustentabilidade e boas práticas de desenvolvimento 👩🏻‍💻🌱*

*Feito com 💚 para um futuro mais verde*

</div>
