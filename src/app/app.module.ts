import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { SlikeSlajderComponent } from './slike-slajder/slike-slajder.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HttpClientModule } from '@angular/common/http';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { DetailsComponent } from './details/details.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    SlikeSlajderComponent,
    ONamaComponent,
    ProizvodiComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    TagsComponent,
    DetailsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
