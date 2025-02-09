
const img1Div = document.getElementById("contenedorImagen1")
const img1Normal = "./imagenes/Gato1.jpg"
const img1EspejoHoriontal = "./imagenes/Gato1R.jpg"
const img1EspejoVertical = "./imagenes/Gato1U.jpg"
const img1EspejoHorizontalHorizontal = "./imagenes/Gato1RU.jpg"

const img2Div = document.getElementById("contenedorImagen2")
const img2Normal = "./imagenes/Gato2.jpg"
const img2EspejoHoriontal = "./imagenes/Gato2L.jpg"
const img2EspejoVertical = "./imagenes/Gato2U.jpg"
const img2EspejoHorizontalHorizontal = "./imagenes/Gato2LU.jpg"

function clickImagen(divClick, otro) {
    return function () {
        otro.setAttribute("hidden", "");
        divClick.style.setProperty("width", "40vw");
        divClick.getElementsByTagName("div")[0].style.setProperty("display", "flex")
    };
}
function cambiarImagen(divClick, nuevaImagen) {
    return function () {
        divClick.querySelector("img").setAttribute("src", nuevaImagen)
    };
}

function volverMenu() {
    let contenedores = document.getElementsByClassName("contenedorImagen")
    return function () {
        for (let index = 0; index < contenedores.length; index++) {
            recolocar(contenedores[index])
        }
    };
}
function recolocar(contenedor) {
    contenedor.removeAttribute("hidden");
    contenedor.querySelector(".botonera").style.setProperty("display", "none")
}
img1Div.getElementsByTagName("img")[0].addEventListener("click", clickImagen(img1Div, img2Div));
img1Div.querySelector("#btnNormal").addEventListener("click", cambiarImagen(img1Div, img1Normal));
img1Div.querySelector("#btnEHorizontal").addEventListener("click", cambiarImagen(img1Div, img1EspejoHoriontal));
img1Div.querySelector("#btnEVertical").addEventListener("click", cambiarImagen(img1Div, img1EspejoVertical));
img1Div.querySelector("#btnEVertivalHorizontal").addEventListener("click", cambiarImagen(img1Div, img1EspejoHorizontalHorizontal));
img1Div.querySelector("#btnVuelta").addEventListener("click", volverMenu());
img1Div.querySelector("#btnVuelta").addEventListener("click", cambiarImagen(img1Div, img1Normal));

img2Div.getElementsByTagName("img")[0].addEventListener("click", clickImagen(img2Div, img1Div));
img2Div.querySelector("#btnNormal").addEventListener("click", cambiarImagen(img2Div, img2Normal));
img2Div.querySelector("#btnEHorizontal").addEventListener("click", cambiarImagen(img2Div, img2EspejoHoriontal));
img2Div.querySelector("#btnEVertical").addEventListener("click", cambiarImagen(img2Div, img2EspejoVertical));
img2Div.querySelector("#btnEVertivalHorizontal").addEventListener("click", cambiarImagen(img2Div, img2EspejoHorizontalHorizontal));
img2Div.querySelector("#btnVuelta").addEventListener("click", volverMenu());
img2Div.querySelector("#btnVuelta").addEventListener("click", cambiarImagen(img2Div, img2Normal));