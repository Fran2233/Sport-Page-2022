import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ManComponent } from '../pages/man/man.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { WomanComponent } from './woman/woman.component';
import { BoysComponent } from './boys/boys.component';
import { GirlComponent } from './girl/girl.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ManComponent,
    WomanComponent,
    BoysComponent,
    GirlComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    ManComponent,
    WomanComponent,
    BoysComponent,
    GirlComponent
  ]
})
export class PagesModule { }
