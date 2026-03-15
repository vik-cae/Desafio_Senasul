var map = L.map("map").setView([-20.4697, -54.6155], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems
  },
  draw: {
    polyline: false,
    polygon: false,
    marker: false
  }
});

map.addControl(drawControl);

function criarPopup(marker, nome, tipo, descricao) {

  let pos = marker.getLatLng();

  let popup = `
    <b>${nome}</b><br>
    Tipo: ${tipo}<br>
    Descrição: ${descricao}<br>
    Lat: ${pos.lat}<br>
    Lng: ${pos.lng}<br><br>

    <button onclick="event.stopPropagation(); editarMarcador(${marker._leaflet_id})">
      Editar
    </button>

    <button onclick="event.stopPropagation(); removerMarcador(${marker._leaflet_id})">
      Excluir
    </button>

    <br><br>

    <button onclick="event.stopPropagation(); iniciarLinha()">
      Criar Linha
    </button>

    <button onclick="event.stopPropagation(); iniciarPoligono()">
      Criar Polígono
    </button>
  `;

  marker.bindPopup(popup);
}

function carregarGeoJSON(data){

  L.geoJSON(data, {

    onEachFeature: function (feature, layer) {

      if (feature.properties && layer instanceof L.Marker) {

        criarPopup(
          layer,
          feature.properties.nome,
          feature.properties.tipo,
          feature.properties.descricao
        );

      }

      drawnItems.addLayer(layer);

    }

  }).addTo(map);

}

fetch("../dados/exemplo.geojson")
  .then((response) => response.json())
  .then((data) => carregarGeoJSON(data));

function importarArquivo(){

  let input = document.getElementById("fileInput");
  let file = input.files[0];

  if(!file){
    alert("Selecione um arquivo");
    return;
  }

  let reader = new FileReader();

  reader.onload = function(e){

    let data = JSON.parse(e.target.result);

    carregarGeoJSON(data);

  };

  reader.readAsText(file);

}

map.on("click", function(e){

  if(modoDesenho !== null){
    return;
  }

  let nome = prompt("Nome do local:");
  if(!nome) return;

  let tipo = prompt("Tipo:");
  let descricao = prompt("Descrição:");

  let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

  drawnItems.addLayer(marker);

  criarPopup(marker,nome,tipo,descricao);

});

function removerMarcador(id){

  let marker = map._layers[id];

  if(marker){
    map.removeLayer(marker);
  }

}

function editarMarcador(id){

  let marker = map._layers[id];

  if(!marker) return;

  let nome = prompt("Novo nome:");
  let tipo = prompt("Novo tipo:");
  let descricao = prompt("Nova descrição:");

  criarPopup(marker,nome,tipo,descricao);

}

// Unidade Sanesul 1
let sanesul1 = L.marker([-20.4569, -54.5858]).addTo(map);

sanesul1.bindPopup(`
<b>Sanesul - Unidade Chácara Cachoeira</b><br>
Endereço: R. Dr. Zerbini, 421<br>
Campo Grande - MS<br>
Lat: -20.4569<br>
Lng: -54.5858
`);


// Unidade Sanesul 2
let sanesul2 = L.marker([-20.4949, -54.6024]).addTo(map);

sanesul2.bindPopup(`
<b>Sanesul - Unidade Vila Vilas Boas</b><br>
Endereço: R. Estrela do Sul, 300<br>
Campo Grande - MS<br>
Lat: -20.4949<br>
Lng: -54.6024
`);