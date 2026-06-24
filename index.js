let API_KEY = "DEMO_KEY";

let resultado = document.querySelector("#resultado");
let botonFecha = document.querySelector("#Fecha");

botonFecha.onclick = buscarFecha;

function buscarFecha() {

    let fecha = document.querySelector("#fecha").value;

    let url = "https://api.nasa.gov/planetary/apod?api_key=" + DY7XjntqMgJLFHYv0onunfBapKN8ZNG8UzhudHfQ + "&date=" + fecha;

    fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {
            resultado.innerHTML =
                "<h2>" + datos.title + "</h2>" +
                "<img src='" + datos.url + "' width='400'>" +
                "<p>" + datos.explanation + "</p>";
        });
}
