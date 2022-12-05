import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  productid: number = 0;
  quantity!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['productid']
        ? (this.productid = params['productid'])
        : (this.productid = 1);
      // params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    });
    this.getProducts();
  }

  addProductToCart() {}

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
        this.product = prod[0];
      });
  }
}
