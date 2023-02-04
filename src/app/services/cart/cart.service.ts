import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { Proizvod } from 'src/app/shared/models/proizvod';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart=new Cart();

  dodajUKorpu(proizvod:Proizvod):void{
    let cartItem=this.cart.items.find(item=>item.proizvod.id===proizvod.id);
    if(cartItem){
      this.changeQuantity(proizvod.id, cartItem.quantity+1)
      
    return;
    }
    this.cart.items.push(new CartItem(proizvod));
  }
  
  izbaciIzKorpe(proizvodId:number): void{
    this.cart.items=this.cart.items.filter(item=>item.proizvod.id!=proizvodId)
  }
  changeQuantity(proizvodId:number,quantity:number){
    let cartItem=this.cart.items.find(item=>item.proizvod.id===proizvodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }

  getCart():Cart{
    return this.cart;

  }
}
