let num, num1, num2, num3, annoNacimiento, str, nom1, nom2, amor, color, ciudad, tempC, boo;
num = 5;
str = "Hola";
boo = true;

//1
console.log(num + str + boo);

//2
nom1 = "Manolo";
nom2 = "Juan";
amor = nom1 + " " + nom2;
console.log(amor);

//3
num1 = Number(prompt("Dame un numero"));
num2 = Number(prompt("Dame otro un numero"));
console.warn(num1 + num2);

//4 //8
console.log(num1 * num2);

//5
num2 = num1 - 1;
console.log("num1 :" + num1 + "num2 :" + num2);
num3 = num2;
num2 = num1;
num1 = num3;
console.log("num1 :" + num1 + "num2 :" + num2);

//6
nom1 = prompt("¿Nombre?");
console.error(nom1);

//7
annoNacimiento = Number(prompt("Año de nacimiento?"));
alert(2025 - annoNacimiento);

//9
color = prompt("¿Color favorito?");
ciudad = prompt("¿Ciudad de residencia?");
console.log("Me llamo " + nom1 + ", mi color favorito es " + color + " y soy de " + ciudad);

//10
tempC = prompt("¿Temperatura en C a convertir a F?");
console.error((tempC * 9 / 5) + 32);

//11
console.log(typeof (nom2));