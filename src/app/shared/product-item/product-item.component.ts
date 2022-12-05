import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import CartItem from 'src/app/models/cartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {

    console.log("adding to cart");
    
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    }
    this.cartService.setCartItem(cartItem);
  }
}
