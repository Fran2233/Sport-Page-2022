import { Producto } from "../models/producto.model";

export interface cargarProductos {
    ok: boolean;
    productos: Producto[];
    total:number;
}

export interface cargarProducto {
    ok: boolean;
    producto: Producto;
}