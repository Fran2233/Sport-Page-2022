import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ManComponent } from '../pages/man/man.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { WomanComponent } from './woman/woman.component';
import { BoysComponent } from './boys/boys.component';
import { GirlComponent } from './girl/girl.component';

import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductoService } from '../services/producto.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ManComponent,
    WomanComponent,
    BoysComponent,
    GirlComponent,
    ProductoComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  providers:[
    ProductoService
  ]
})
export class PagesModule { }
