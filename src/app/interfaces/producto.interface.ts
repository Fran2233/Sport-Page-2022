import { Producto } from "../models/producto.model";

export interface cargarProductos {
    ok: boolean;
    productos: Producto[];
}