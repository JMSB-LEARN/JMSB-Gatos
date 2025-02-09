// Clase Producto
export class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    comprar(cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
            return `Costo total: €${(this.precio * cantidad).toFixed(2)}`;
        } else {
            return "No hay suficientes unidades disponibles.";
        }
    }

    reponer(cantidad) {
        this.cantidad += cantidad;
    }

    aplicarDescuento(porcentaje) {
        this.precio -= (this.precio * porcentaje) / 100;
    }

    informacion() {
        return `Producto: ${this.nombre}, Precio: €${this.precio.toFixed(2)}, Cantidad: ${this.cantidad}, Categoría: ${this.categoria}`;
    }

    get agotado() {
        return this.cantidad === 0;
    }

    esPremium() {
        return this.precio > 100;
    }
}

// Crear objetos y probar métodos
const producto1 = new Producto("Televisor", 500, 10, "Electrónica");
const producto2 = new Producto("Camiseta", 20, 50, "Ropa");
const producto3 = new Producto("Laptop", 1200, 5, "Electrónica");
const producto4 = new Producto("Silla", 80, 15, "Muebles");
const producto5 = new Producto("Libro", 15, 100, "Librería");

// Añadir atributo IVA a uno de los objetos
producto1.IVA = 0.21;
producto1.precioConIVA = function () {
    return this.precio * (1 + this.IVA);
};

// Arrays de productos
const array1 = [producto1, producto2, producto3, producto4, producto5];
const array2 = [
    new Producto("Smartphone", 800, 7, "Electrónica"),
    new Producto("Zapatos", 50, 30, "Ropa"),
    new Producto("Mesa", 200, 5, "Muebles"),
    new Producto("Auriculares", 150, 20, "Electrónica"),
    new Producto("Lechuga", 1, 500, "Alimentos")
];

// Combinar arrays
const productosTotal = [...array1, ...array2];

// Añadir producto al final y al principio
productosTotal.push(new Producto("Monitor", 250, 8, "Electrónica"));
productosTotal.unshift(new Producto("Café", 5, 200, "Alimentos"));

// Función para construir un array con parámetros
function construirArray(...elementos) {
    return elementos;
}

// Función que devuelve primer elemento, array con el resto y último elemento
function dividirArray(array) {
    const [primero, ...resto] = array;
    const ultimo = resto.pop();
    return { primero, resto, ultimo };
}

// Buscar "Lechuga"
const lechugaFind = productosTotal.find((producto) => producto.nombre === "Lechuga");
const lechugaManual = (() => {
    for (const producto of productosTotal) {
        if (producto.nombre === "Lechuga") return producto;
    }
    return null;
})();

// Invertir orden
productosTotal.reverse();
console.log("Invertido:", productosTotal);

// Ordenar por precio
productosTotal.sort((a, b) => a.precio - b.precio);

// Copiar y ordenar por nombre
const productosPorNombre = [...productosTotal].sort((a, b) => a.nombre.localeCompare(b.nombre));

// Subir precios
productosTotal.forEach((producto) => {
    producto.precio += 10;
});

// Crear array con nombres
const nombresProductos = productosTotal.map((producto) => producto.nombre);

console.log({
    productosTotal,
    productosPorNombre,
    nombresProductos,
    lechugaFind,
    lechugaManual,
});
