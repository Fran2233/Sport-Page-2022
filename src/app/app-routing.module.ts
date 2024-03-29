import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManComponent } from './pages/man/man.component';
import { WomanComponent } from './pages/woman/woman.component';
import { BoysComponent } from './pages/boys/boys.component';
import { GirlComponent } from './pages/girl/girl.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'man',
    component: ManComponent
  },
  {
    path: 'woman',
    component: WomanComponent
  },
  {
    path: 'boys',
    component: BoysComponent
  },
  {
    path: 'girl',
    component: GirlComponent
  },
  {
    path: 'producto/:id',
    component: ProductoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
