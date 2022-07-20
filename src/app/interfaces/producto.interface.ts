import { Producto } from "../models/producto.model";

export interface cargarProductos {
    ok: boolean;
    productos: Producto[];
}

export interface cargarProducto {
    ok: boolean;
    producto: Producto;
}