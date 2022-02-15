let map
function initMap() {
    drawMap() // la función que dibuja el mapa
    printMarker() // lo que dibuja la chincheta
}

function drawMap() {
    const { Map } = google.maps
    const inputs = document.querySelectorAll('.d-none input')// lo añadio Andrés porque es una clase oculta para sólo ver el mapa sin botones

    const latitude = Number(inputs[0].value) // posición latitud en la posición del array, por usar uerySelectorAll
    const longitude = Number(inputs[1].value) // posicion longitud idem

    map = new Map(                       // instancia para pintar el mapa con las coordenadas y este zoom
        document.getElementById('myMap'),
        {
            zoom: 20,
            center: { lat: latitude, lng: longitude }
        }
    )
}


function printMarker() {
    const { Marker } = google.maps
    const inputs = document.querySelectorAll('.d-none input')

    const latitude = Number(inputs[0].value)
    const longitude = Number(inputs[1].value)

    new Marker({
        map, // pintar la chincheta dentro del mapa centrado con las mismas coordenadas
        position: { lat: latitude, lng: longitude }
    })
}


