import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import CartItem from 'src/app/models/cartItem';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  providers: [MessageService]
})
export class ProductItemComponent{
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private messageService: MessageService
    
  ) {}


   
  addToCart() {
   
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
    this.messageService.add({key: 'c', severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  onConfirm() {}
  onCancel() {}
}
