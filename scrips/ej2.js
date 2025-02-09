let descuento, precio, activo, email, nombre, apellido, num1, num2, num3, nom1, nom2, nom3, boo1, boo2, str1, str2, str3, base, altura, a, b;


//1
//a
num1 = "123", num2 = "456";
num1 = Number(num1);
num2 = Number(num2);
console.log(num1 + num2);

//b
num1 = false + 0;
num2 = Number(true);
console.log(num1 + num2);

//c
str1 = (String(num1));
str1 += " es un número";
console.log(str1);


//2
//a
base = 10;
altura = 20;
console.log(base * 2 + altura * 2);

//b
num1 = 12.3;
num2 = Number.parseInt(num1 + 1);

console.log(num2);
//c
num1 = 16;
console.log(num1 ** 0.5);


//3
//a
num1 = -5;
num2 = 7;
console.log(num1 > 0);
console.log(num2 > 0);

//b
num1 = 25;
console.log((18 < num1) && (num1 < 35))

//c
a = 12;
b = 20;
aMayorB = a > b;
aIgualB = a == b;
console.log("Mayor: " + aMayorB)
console.log("Igual: " + aIgualB)


//4
//a
nombre = null;
apellido = "garcia";
nombre = nombre || "invitado";

//b
activo = true;
email = null;
console.log(activo && email)


//5
//a
precio = 100;
descuento = null;
descuento = descuento ?? 10;
console.log(precio * (1 - (descuento / 100)));

//b
edad = "30";
edad = +Number(edad);
edad = (((edad >= 18) && (65 >= edad) && edad) || 0);
console.log(edad);