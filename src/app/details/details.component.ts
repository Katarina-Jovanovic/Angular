import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProizvodiService } from '../services/proizvodi/proizvodi.service';
import { Proizvod } from '../shared/models/proizvod';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  proizvodi!:Proizvod;
  constructor(private activatedRoute:ActivatedRoute, private ps:ProizvodiService, 
    private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.proizvodi=this.ps.getProizvodiById(params['id']);




    })
  }

  ngOnInit(): void {
    
  }
  dodajUKorpu(){
    this.cartService.dodajUKorpu(this.proizvodi);
    this.router.navigateByUrl('/cart-page');
   }

}
