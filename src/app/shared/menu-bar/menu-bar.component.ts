import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Man',
        url: 'man'
      },
      {
        label: 'Woman',
        url: 'woman'
      },
      {
        label: 'Boy',
        url: 'boys'
      },
      {
        label: 'Girl',
        url: 'girl'
      },
      {

        icon: 'pi pi-home',
        url: 'home'
      }



    ]
  }

}
