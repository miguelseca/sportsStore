import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Cart from '../models/cart';
import CartItem from '../models/cartItem';
export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());

  constructor() {}

  ngOnInit(): void {
    this.initCartLocalStorage();
  }

  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const initialCart = {
        items: [],
      };
      localStorage.setItem(CART_KEY, JSON.stringify(initialCart));
    } else {
      this.cart$.next(cart);
    }
  }

  getCart(): Cart {
    return JSON.parse(localStorage.getItem(CART_KEY)!);
  }

  setCartItem(cartItem: CartItem): Cart {
    const cart = this.getCart();

    const cartItemExists = cart.items.find(
      (item) => item.productId === cartItem.productId
    );

    if (cartItemExists) {
      cart.items.map((item) => {
        if (item.productId === cartItem.productId) {
          item.quantity += cartItem.quantity;
        }
      });
    } else {
      cart.items.push(cartItem);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    this.cart$.next(cart);
    return cart;
  }
}
