import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { delay } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productos!: Producto[];
  paginator!:MatPaginator;
  total!:number;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.getProductos()
    .pipe(
      delay(1000)
    ).subscribe(res => {
      this.productos = res.productos;
      console.log('PRODUCTOS->',res.total);
      this.total = res.total;
    })
    
  }




  // cargarProductos() {
  //   this.productoService.getProductos()
  //     .subscribe(res => {
  //       this.productos = res.productos;
  //       console.log(this.productos);
  //     })
  // }



}
