# Desafio Técnico — Descrição Completa

## Objetivo

Desenvolver **do zero** uma aplicação voltada ao geoprocessamento que permita visualizar, criar, editar e remover elementos geográficos em um mapa interativo.

---

## Requisitos Funcionais

### 1. Importação de Dados

- A aplicação deve ser capaz de **receber arquivos no formato JSON ou GeoJSON**.
- Ao importar um arquivo, os elementos geográficos contidos nele devem ser exibidos no mapa.
- Um arquivo de exemplo está disponível em `dados/exemplo.geojson` para testes.

### 2. Mapa Interativo

- Os dados importados devem ser **exibidos em um mapa interativo**.
- O mapa deve permitir navegação (zoom, pan) e apresentar os elementos geográficos de forma clara.

### 3. Operações CRUD

A aplicação deve permitir as seguintes operações sobre os elementos geográficos:

| Operação   | Descrição                                                        |
|------------|------------------------------------------------------------------|
| **Create** | Criar novos elementos geográficos (pontos, linhas ou polígonos)  |
| **Read**   | Visualizar os elementos existentes no mapa e suas propriedades   |
| **Update** | Editar propriedades ou geometria de elementos existentes         |
| **Delete** | Remover elementos do mapa                                        |

### 4. Visualização de Propriedades

- Ao **clicar em um elemento do mapa**, suas propriedades devem ser exibidas (por exemplo, em um popup ou painel lateral).

---

## Tarefa Adicional — Unidades Sanesul em Campo Grande/MS

Além dos requisitos acima, o mapa deve apresentar **dois pontos representando unidades da empresa Sanesul** localizadas na cidade de **Campo Grande - MS**.

### O que você deve fazer:

1. **Pesquisar** as unidades da Sanesul em Campo Grande - MS.
2. **Obter as coordenadas geográficas** (latitude e longitude) dessas unidades.
3. **Adicionar os pontos ao mapa** com as informações de cada unidade.
4. Ao clicar em cada ponto, exibir um **popup** contendo:
   - **Nome da unidade**
   - **Endereço**
   - **Coordenadas** (latitude e longitude)

---

## Tecnologias

Você tem **total liberdade** na escolha de tecnologias. Abaixo estão algumas sugestões, mas qualquer stack é aceita:

- **Linguagens:** JavaScript, Python, TypeScript, ou outra de sua preferência
- **Frameworks front-end:** React, Vue, Angular, Svelte, ou qualquer outro
- **Bibliotecas de mapas:** Leaflet, OpenLayers, Mapbox GL JS, Deck.gl, ou similar
- **Back-end (se necessário):** Node.js, Django, Flask, FastAPI, ou qualquer outro
- **Banco de dados (se necessário):** PostgreSQL/PostGIS, MongoDB, SQLite, ou qualquer outro

---

## Critérios de Avaliação

Sua solução será avaliada com base nos seguintes critérios:

| Critério                              | Descrição                                                                 |
|---------------------------------------|---------------------------------------------------------------------------|
| **Organização do projeto**            | Estrutura de pastas, separação de responsabilidades, clareza na organização |
| **Qualidade do código**               | Código limpo, legível, boas práticas e padrões consistentes               |
| **Manipulação de dados geoespaciais** | Capacidade de trabalhar com formatos geográficos (GeoJSON, coordenadas)   |
| **Funcionamento do CRUD**             | Todas as operações (criar, ler, editar, excluir) funcionando corretamente |
| **Usabilidade da interface**          | Interface intuitiva, responsiva e de fácil utilização                     |
| **Clareza da documentação**           | README explicativo, instruções de instalação e execução bem definidas     |

---

## Entrega

- **Prazo:** até **segunda-feira às 12h**.
- **Submissão:** preencha o formulário abaixo com sua solução:
  - **https://forms.gle/umbGb1zdjRdkZGPy8**
- **Formato de entrega:**
  - Link para repositório Git (GitHub, GitLab, Bitbucket, etc.), **ou**
  - Arquivo compactado (.zip ou .tar.gz) com o código-fonte.
- Inclua um **README** no seu projeto com:
  - Instruções de instalação e execução
  - Tecnologias utilizadas
  - Breve explicação das decisões técnicas

---

Boa sorte!
