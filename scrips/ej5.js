import { Producto } from './productosClaseArray.js';

const productoA = new Producto("Tablet", 300, 15, "Electrónica");
const productoB = new Producto("Zapatillas", 80, 25, "Ropa");
const productoC = new Producto("Monitor", 150, 10, "Electrónica");

console.log(productoA.informacion());
console.log(productoB.comprar(5));
console.log(productoB.comprar(30));
productoC.reponer(20);
console.log(productoC.informacion());
productoA.aplicarDescuento(10);
console.log(productoA.informacion());

productoA.IVA = 0.21;
productoA.calcularPrecioConIVA = function () {
    return this.precio * (1 + this.IVA);
};

console.log(`Precio de ${productoA.nombre} con IVA: €${productoA.calcularPrecioConIVA().toFixed(2)}`);
console.log(`¿${productoA.nombre} es premium?`, productoA.esPremium());
console.log(`¿${productoC.nombre} está agotado?`, productoC.agotado);
