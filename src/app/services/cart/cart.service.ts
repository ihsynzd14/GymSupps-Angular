import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Supp } from 'src/app/shared/models/Supp';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(supp: Supp):void{
    let cartItem = this.cart.items.find(item => item.supp.id === supp.id);
    if(cartItem){
      this.changeQuantity(supp.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(supp));
  }

  removeFromCart(suppId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.supp.id != suppId);
  }

  changeQuantity(suppId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.supp.id === suppId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}