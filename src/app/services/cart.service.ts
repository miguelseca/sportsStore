import { Injectable, OnInit } from '@angular/core';
import Cart from '../models/cart';
import CartItem from '../models/cartItem';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  
  initCartLocalStorage() {
    const initialCart = {
      items: [],
    };
    localStorage.setItem(CART_KEY, JSON.stringify(initialCart));
  }
  
  setCartItem(cartItem: CartItem): Cart {
    
    this.initCartLocalStorage();
    const cart: Cart = JSON.parse(localStorage.getItem(CART_KEY)!);
    cart.items.push(cartItem);

    return cart;
  }
}
