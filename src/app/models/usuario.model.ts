import { Producto } from './producto.model';
export class Usuario {
    constructor(
        public email: string,
        public google: string,
        public nombre: string,
        public password?: string,
        public productos?: Producto[],
        public uid?: string
    ) { }
}