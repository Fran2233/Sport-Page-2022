import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cargarProducto, cargarProductos } from '../interfaces/producto.interface';
import { delay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getProductos() {
    return this.http.get<cargarProductos>(`${this.baseUrl}/productos`)
    
  }

  getProducto(id:string) {
    return this.http.get<cargarProducto>(`${this.baseUrl}/productos/${id}`);
  }




}
