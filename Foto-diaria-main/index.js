let API_KEY = "YtxcKQmXheVshnnU1Z2vlQUWyMgFh9PSVT3JFuSJ";

let resultado = document.querySelector("#resultado");

let botonfecha = document.querySelector("#Fecha");
let botonaleatorio = document.querySelector("#aleatorio");

botonfecha.onclick = buscarFecha;
botonaleatorio.onclick = buscarAleatorio;


function buscarFecha() {

    let fecha = document.querySelector("#fecha").value;

    let url = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY + "&date=" + fecha;

    fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {

            resultado.innerHTML =
                "<h2>" + datos.title + "</h2>" ;
                "<img src='" + datos.url + "' width='500'>" ;
                "<p>" + datos.explanation + "</p>";

        });

}



function buscarAleatorio() {

    let cantidad = document.querySelector("#cantidad").value;

    let url = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY + "&count=" + cantidad;

    fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {

            resultado.innerHTML = "";

            for (let index = 0; index < datos.length; index++) {

                resultado.innerHTML +=
                    "<div>" +
                    "<h2>" + datos[index].title + "</h2>" ;
                    "<img src='" + datos[index].url + "' width='300'>" ;
                    "<p>" + datos[index].explanation + "</p>" 
                    "</div>";

            }

        });

}
