import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();

  }

  izbaciIzKorpe(cartItem:CartItem){
    this.cartService.izbaciIzKorpe(cartItem.proizvod.id);
    this.setCart();
  }
changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.proizvod.id,quantity);
  this.setCart();
}

  setCart(){
    this.cart=this.cartService.getCart();
  }
  ngOnInit(): void {
    
  }

}
