class Producto {
    constructor(tipo, nombre, precio, decripcion = "") {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.decripcion = decripcion;
    }

    static setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
}