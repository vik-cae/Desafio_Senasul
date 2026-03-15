let modoDesenho = null;
let pontosLinha = [];
let pontosPoligono = [];

function iniciarLinha() {
  modoDesenho = "linha";
  pontosLinha = [];

  alert("Clique em dois pontos no mapa");
}

function iniciarPoligono() {
  modoDesenho = "poligono";
  pontosPoligono = [];

  alert("Clique em três pontos no mapa");
}

function criarPopupGeometria(layer, tipo) {
  let info = "";

  if (tipo === "Polígono") {
    let latlngs = layer.getLatLngs()[0];
    let area = L.GeometryUtil.geodesicArea(latlngs); // área em m²
    info = `<br>Área: ${area.toFixed(2)} m²`;
  } else if (tipo === "Linha") {
    // Calcula o comprimento da linha
    let latlngs = layer.getLatLngs();
    let comprimento = 0;

    for (let i = 0; i < latlngs.length - 1; i++) {
      comprimento += latlngs[i].distanceTo(latlngs[i + 1]); // distância entre os pontos em metros
    }

    info = `<br>Comprimento: ${comprimento.toFixed(2)} m`;
  }

  let popup = `
    <b>${tipo}</b>${info}<br><br>

    <button onclick="event.stopPropagation(); editarGeometria(${layer._leaflet_id})">
      Editar
    </button>

    <button onclick="event.stopPropagation(); removerGeometria(${layer._leaflet_id})">
      Excluir
    </button>
  `;

  layer.bindPopup(popup);
}

function removerGeometria(id) {
  let layer = map._layers[id];

  if (layer) {
    map.removeLayer(layer);
  }
}

function editarGeometria(id) {
  let layer = map._layers[id];
  if (!layer) return;

  if (layer.editing.enabled()) {
    layer.editing.disable();
  } else {
    layer.editing.enable();
  }
}

map.on("click", function (e) {
  if (modoDesenho === "linha") {
    pontosLinha.push([e.latlng.lat, e.latlng.lng]);

    if (pontosLinha.length >= 2) {
      let linha = L.polyline(pontosLinha, { color: "blue" }).addTo(map);

      drawnItems.addLayer(linha);

      criarPopupGeometria(linha, "Linha");

      pontosLinha = [];
      modoDesenho = null;
    }

    return;
  }

  if (modoDesenho === "poligono") {
    pontosPoligono.push([e.latlng.lat, e.latlng.lng]);

    if (pontosPoligono.length >= 3) {
      let poligono = L.polygon(pontosPoligono, { color: "green" }).addTo(map);

      drawnItems.addLayer(poligono);

      criarPopupGeometria(poligono, "Polígono");

      pontosPoligono = [];
      modoDesenho = null;
    }

    return;
  }
});
