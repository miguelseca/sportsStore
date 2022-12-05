import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.featuredProducts = prod;
      });
  }
}
