import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import Cart from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})

export class CartPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  cart!: Cart;
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
    
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
    //this.endSubs$.next();
    this.endSubs$.complete();
  }

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
      });
  }
  
  private getCart() {
    this.cart = this.cartService.getCart();
  }
  


  backToShop() {
    this.router.navigate(['/products']);
  }

  removeItem() {
    //TODO
  }

  
}