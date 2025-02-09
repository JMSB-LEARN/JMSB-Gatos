const esPar = (numero) => numero % 2 === 0;
(() => { alert("Hi") })()

const esParString = (numero) => numero % 2 === 0 ? "Es par" : "Es impar";
const esMayorQue0String = (numero) => numero > 0 ? "Es mayor que 0" : "Es menor que 0";

alert(generarNumeroAleatorio(1, 5, esMayorQue0String))
/*alert(generarNumeroAleatrio(1, 5, esParString))
alert(generarNumeroAleatrio(-7, 5, esMayorQue0String))
alert(generarNumeroAleatrio(-7, 5, esParString))*/
const temporizador = crearTemporizador(4);
const temporizador2 = crearTemporizador2();
alert(temporizador())
alert(temporizador())
setTimeout(() => alert(temporizador()), 2000);
setTimeout(() => alert(temporizador()), 5000);

function generarNumeroAleatorio(minRango, maxRango, callback) {
    let rangoAleatorio, numeroGenerado;
    rangoAleatorio = (maxRango - minRango) + 1;
    numeroGenerado = Math.floor(Math.random() * rangoAleatorio) + minRango;
    //Para saber que numero se ha generado.
    alert(numeroGenerado);
    return callback(numeroGenerado);
}
function crearTemporizador(intervalo) {
    let tiempoAcumulado = 0;
    return function temporizador() {
        tiempoAcumulado += intervalo;
        return tiempoAcumulado
    }
}

function crearTemporizador2() {
    const horaInicio = new Date().getTime();
    return function temporizador() {
        const horaActual = new Date().getTime();
        const tiempoTranscurrido = Math.floor((horaActual - horaInicio) / 1000);
        return tiempoTranscurrido;
    }
}





