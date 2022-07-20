
export class Producto {
    constructor(
        public nombre: string,
        public categoria: string,
        public precio: number,
        public id: string,
        public img: string,
        public talles: number[],
        public images:string[]
    ) { }
}