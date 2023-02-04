import { Component } from '@angular/core';
import { SlidesInterface } from './slike-slajder/slides-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prodavnica Poklona';

  slides:SlidesInterface[]=[
    {url:'/assets/images/slika1.jpg', title:'Poklon1'},
    {url:'/assets/images/slika2.jpg', title:'Poklon2'},
    {url:'/assets/images/slika3.jpg', title:'Poklon3'},
    {url:'/assets/images/slika4.jpg', title:'Poklon4'},
    {url:'/assets/images/slika5.jpg', title:'Poklon5'}


  ];
}
