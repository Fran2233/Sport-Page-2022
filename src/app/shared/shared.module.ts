import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialModule
  ],
  exports: [
    MenuBarComponent,
    PrimeNgModule,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }
