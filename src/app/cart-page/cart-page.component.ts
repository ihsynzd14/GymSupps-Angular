import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { SuppService } from '../services/supplements/supp.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();
   }
  
  ngOnInit(): void{
  }
  
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.supp.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.supp.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }



}
