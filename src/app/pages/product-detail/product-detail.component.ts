import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CartItem from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  products: Product[] = [];
  productid!: number;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['productid']
        ? (this.productid = params['productid'])
        : (this.productid = 1);
    });
    this.getProducts();
  }


  addProductToCart() {

    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };
    this.cartService.setCartItem(cartItem);
    
  }

  onBuyNowClick() {

    this.addProductToCart();
    this.router.navigate(['cart']);
    
    
    
  }




  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
        this.product = prod[this.productid];
      });
  }
}
