import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManComponent } from './pages/man/man.component';
import { WomanComponent } from './pages/woman/woman.component';
import { BoysComponent } from './pages/boys/boys.component';
import { GirlComponent } from './pages/girl/girl.component';

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
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
