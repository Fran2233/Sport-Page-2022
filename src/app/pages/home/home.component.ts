import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    console.log(this.cargarProductos());
  }




  cargarProductos() {
    this.productoService.getProductos()
      .subscribe(res => {
        this.productos = res.productos;
        console.log(this.productos);
      })
  }

}
