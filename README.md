# Aplicação de Geoprocessamento Interativo

Aplicação web desenvolvida para visualização e manipulação de dados
geográficos em um **mapa interativo**, permitindo importar arquivos
**GeoJSON/JSON**, visualizar dados geoespaciais e realizar operações
**CRUD (Create, Read, Update, Delete)** diretamente no mapa.

O projeto foi desenvolvido como solução para um **desafio técnico de
geoprocessamento**.

------------------------------------------------------------------------

# Funcionalidades

A aplicação permite:

-   Importar arquivos **GeoJSON**
-   Visualizar elementos geográficos no mapa
-   Criar novos pontos no mapa
-   Criar linhas e polígonos
-   Editar elementos existentes
-   Remover elementos
-   Visualizar propriedades ao clicar nos elementos
-   Calcular **área de polígonos** e **comprimento de linhas**

Além disso, o mapa apresenta **duas unidades da Sanesul em Campo
Grande - MS** com informações no popup.

------------------------------------------------------------------------

# Tecnologias Utilizadas

## Frontend

-   HTML5
-   CSS3
-   JavaScript (Vanilla JS)

## Biblioteca de Mapas

-   Leaflet

Biblioteca principal responsável pela renderização e manipulação do mapa
interativo.

## Plugins Leaflet

-   Leaflet.draw\
    Permite desenhar e editar geometrias diretamente no mapa.

-   Leaflet.GeometryUtil\
    Utilizada para cálculos geográficos como **área e distância**.

## Provedor de Mapas

-   OpenStreetMap\
    Utilizado como camada base do mapa.

------------------------------------------------------------------------

# Estrutura do Projeto

    projeto-geoprocessamento
    │
    ├── index.html
    │
    ├── style.css
    │
    ├── script.js
    │
    ├── JS
    │   └── geometria.js
    │
    └── dados
        └── exemplo.geojson

## Descrição dos Arquivos

### index.html

Arquivo principal da aplicação.

Responsável por:

-   carregar o mapa
-   importar bibliotecas
-   disponibilizar interface para upload de GeoJSON.

------------------------------------------------------------------------

### script.js

Contém a lógica principal da aplicação:

-   criação do mapa
-   importação de GeoJSON
-   criação de marcadores
-   CRUD de marcadores
-   criação de popups
-   inserção das unidades da Sanesul.

------------------------------------------------------------------------

### geometria.js

Arquivo responsável pelas geometrias desenhadas no mapa:

-   criação de **linhas**
-   criação de **polígonos**
-   cálculo de **área**
-   cálculo de **comprimento**
-   edição e remoção das geometrias.

------------------------------------------------------------------------

### dados/exemplo.geojson

Arquivo de exemplo utilizado para teste de importação de dados
geográficos.

------------------------------------------------------------------------

# Como Executar o Projeto

## 1️⃣ Clonar ou baixar o projeto

``` bash
git clone <repositorio>
```

ou baixar o `.zip`.

------------------------------------------------------------------------

## 2️⃣ Abrir o projeto

Como a aplicação é **100% frontend**, não é necessário instalar
dependências ou rodar servidor.

Basta abrir:

    index.html

no navegador.

Recomendado utilizar:

-   Google Chrome
-   Microsoft Edge
-   Firefox

------------------------------------------------------------------------

# Como Utilizar

## Importar GeoJSON

1.  Clique em **Selecionar arquivo**
2.  Escolha um arquivo `.geojson` ou `.json`
3.  Clique em **Importar GeoJSON**

Os elementos serão automaticamente renderizados no mapa.

------------------------------------------------------------------------

## Criar Ponto

1.  Clique em qualquer local do mapa
2.  Preencha:
    -   Nome
    -   Tipo
    -   Descrição

Um marcador será criado.

------------------------------------------------------------------------

## Criar Linha

1.  Clique em um marcador existente
2.  Clique em **Criar Linha**
3.  Clique em **dois pontos** no mapa.

O sistema calcula automaticamente o **comprimento da linha**.

------------------------------------------------------------------------

## Criar Polígono

1.  Clique em um marcador
2.  Clique em **Criar Polígono**
3.  Clique em **três pontos** no mapa.

O sistema calcula automaticamente a **área do polígono em m²**.

------------------------------------------------------------------------

# Editar Elementos

Ao clicar em qualquer elemento do mapa, um **popup** será exibido com
opções:

-   Editar
-   Excluir

------------------------------------------------------------------------

# Unidades da Sanesul

Foram adicionadas duas unidades da empresa:

## Unidade Chácara Cachoeira

Endereço:

R. Dr. Zerbini, 421\
Campo Grande - MS

Coordenadas:

Lat: -20.4569\
Lng: -54.5858

------------------------------------------------------------------------

## Unidade Vila Vilas Boas

Endereço:

R. Estrela do Sul, 300\
Campo Grande - MS

Coordenadas:

Lat: -20.4949\
Lng: -54.6024

Ao clicar em cada marcador é exibido um **popup com as informações da
unidade**.

------------------------------------------------------------------------

# Decisões Técnicas

## Uso de Leaflet

Foi escolhido **Leaflet** por ser:

-   leve
-   simples de integrar
-   amplamente utilizado em aplicações GIS
-   possuir grande ecossistema de plugins.

------------------------------------------------------------------------

## Separação de responsabilidades

O projeto foi dividido em dois arquivos principais:

-   `script.js` → gerenciamento do mapa e marcadores
-   `geometria.js` → manipulação de linhas e polígonos

Essa separação facilita manutenção e organização.

------------------------------------------------------------------------

## Uso de GeoJSON

O formato **GeoJSON** foi utilizado pois:

-   é padrão aberto
-   amplamente utilizado em geoprocessamento
-   compatível nativamente com Leaflet.

------------------------------------------------------------------------

# Possíveis Melhorias Futuras

-   Persistência dos dados em banco de dados
-   Exportação de GeoJSON criado pelo usuário
-   Interface gráfica para edição de propriedades
-   Criação de múltiplos vértices em linhas
-   Melhor UX para criação de polígonos
-   Sistema de camadas (layers)
-   Validação de arquivos GeoJSON

------------------------------------------------------------------------

# Autor

Projeto desenvolvido como solução para **Desafio Técnico de
Geoprocessamento**.
