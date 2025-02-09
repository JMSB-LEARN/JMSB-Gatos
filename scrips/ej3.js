console.log(reverso("Hola"));
console.log(contarVocales("AEIOUaeioupP"));
console.log(palindromoChiste("AEIOUaeioupP"));
console.log(palindromoChiste("aea"));
console.log(parEntre(4, 9));

console.log(parEntre(3, 9));
console.log(crearTablaMultiplicar(11));

console.log(determinarEsPrimo(-1));
console.log(determinarEsPrimo(-0));
console.log(determinarEsPrimo(0));
console.log(determinarEsPrimo(1));
console.log(determinarEsPrimo(2));
console.log(determinarEsPrimo(3));
console.log(determinarEsPrimo(4));
console.log(determinarEsPrimo(5));
console.log(determinarEsPrimo(11));
console.log(determinarEsPrimo(900719925481));
adivinarNumero();
console.log(crearAcronimo("Hola"));

console.log(crearAcronimo("Por Ejempo"));
console.log(crearAcronimo(" Por   Ejempo "));
console.log(crearAcronimo("   "));

//1
function reverso(stringEntrada) {
    let stringSalida = "";
    for (let index = stringEntrada.length - 1; index >= 0; index--) {
        stringSalida += stringEntrada[index];
    }
    return stringSalida;
};

//2
function contarVocales(stringEntrada) {
    let stringSalida = "", cantidadA = 0, cantidadE = 0, cantidadI = 0, cantidadO = 0, cantidadU = 0;
    for (let index = 0; index < stringEntrada.length; index++) {
        let letra = stringEntrada[index];
        if (letra == "a" || letra == "A") {
            cantidadA++;
        } else if (letra == "e" || letra == "E") {
            cantidadE++
        } else if (letra == "i" || letra == "I") {
            cantidadI++
        } else if (letra == "o" || letra == "O") {
            cantidadO++
        } else if (letra == "u" || letra == "U") {
            cantidadU++
        }
    }
    return `a:${cantidadA} e:${cantidadE} i:${cantidadI} o:${cantidadO} u:${cantidadU} `
};

//3
function palindromoChiste(stringEntrada) {
    return stringEntrada == reverso(stringEntrada)
}

//4
function parEntre(inicioRango, finalRango) {
    stringSalida = "";
    if ((inicioRango % 2) != 0) {
        inicioRango++
    }
    for (let index = inicioRango; index <= finalRango; index += 2) {
        stringSalida += " " + index;
    }
    return stringSalida;
}

//5
function crearTablaMultiplicar(numeroEntrada) {
    let tablaSalida = "";
    for (let index = 0; index <= 10; index++) {
        let multiplicado = Number(index) * Number(numeroEntrada);
        tablaSalida += `${numeroEntrada} * ${index}\t= ${multiplicado}\n`;
    }
    return tablaSalida;
}

//6
function determinarEsPrimo(numero) {
    let esPrimo = true;
    if (numero > 0) {
        if (numero != 1 && numero != 2) {
            let counter = 2;
            let limite = numero ** 0.5;
            esPrimo = (numero % counter) == !0;
            counter++;
            while (esPrimo && counter <= limite) {
                esPrimo = (numero % counter) != 0;
                counter = counter + 2;
            }
        }
    } else {
        esPrimo = null;
    }
    return esPrimo;
}

//7
function adivinarNumero() {
    let numeroAdivinar = Math.floor(Math.random() * 101), numeroNoAdivinado = true, numeroEntrada = 0;
    alert(`Pssss Pablo, el numero es ${numeroAdivinar}`)
    while (numeroNoAdivinado) {
        numeroEntrada = prompt("Que numero crees que es?");
        numeroNoAdivinado = Number(numeroEntrada) != numeroAdivinar;
    }
    alert("Es ese, Felicidades.")
}

//8
/* function crearAcronimo() {
    return crearAcronimo("Por Ejempo");
};*/ 
function crearAcronimo(stringEntrada) {
    let arrayString = String(stringEntrada).split(" "), stringSalida = "";
    for (let index = 0; index < arrayString.length; index++) {
        stringSalida += `${arrayString[index].charAt(0)}`;
    }
    if(stringEntrada==false){
        stringSalida=null;
    }
    return stringSalida;
};