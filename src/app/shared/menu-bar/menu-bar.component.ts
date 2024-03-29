import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items!: MenuItem[];

  public token = localStorage.getItem('token');



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
      },
      {
        icon: 'pi pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-user',
            url: 'login'
          },
          {
            label: 'Create Account',
            icon: 'pi pi-fw pi-user-plus',
            url: 'register'
          }

        ]

      },
      {

        icon: 'pi pi-shopping-cart',
        url: 'cart'
      },




    ]

    if (!this.token) {
      this.items.pop();
    }
  }

}
