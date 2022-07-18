import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,
    MenubarModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
