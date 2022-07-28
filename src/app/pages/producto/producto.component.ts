import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public producto!: Producto;
  public urlImg!: any;
  public images!: any[];
  public allImages!: any[];
  public talles!:number[];

  constructor(private activateRoute: ActivatedRoute,
    private productoService: ProductoService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ id }) => {
      this.getProducto(id);

    })
  }


  getProducto(id: string) {
    this.productoService.getProducto(id)
      .subscribe(res => {
        this.producto = res.producto;
        this.images = this.producto.images;
        console.log(this.producto);
        this.images.splice(2, 4);
        this.loadAllImages(id);
        this.producto.talles;
      });
  }


  loadAllImages(id: string) {
    this.productoService.getProducto(id)
      .subscribe(res => {
        this.allImages = res.producto.images;
        console.log(this.allImages);
      })

  }


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayBasic!: boolean;

  displayBasic2!: boolean;

  displayCustom!: boolean;

  activeIndex: number = 0;






}
