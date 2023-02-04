import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ONamaComponent } from './o-nama/o-nama.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {path:'search/:SearchTerm', component:ProizvodiComponent},
  {path:'tag/:tag', component:ProizvodiComponent},
  {path:'proizvodi-page/:id', component:DetailsComponent},
  {path:'cart-page', component:CartPageComponent},

  {
    path: 'login-page',
    component: LoginComponent //Login ovde 

  },
  {
    path: 'signup-page',
    component: SignupComponent //signup ovde 

  }, {
    path: 'pocetna-page',
    component: PocetnaComponent //pocetna ovde 

  },
  {
    path: 'onama-page',
    component: ONamaComponent //O nama ovde 

  }, {
    path: 'proizvodi-page',
    component: ProizvodiComponent //proizvodi component ovde 

  },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
