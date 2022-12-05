import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [],
})
export class CategoryListComponent implements OnInit{
  constructor(  private productService: ProductService, private route: ActivatedRoute) {}

  category!: number;
  products: Product[] = [];
  
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      params['categoryid'] ? this.category = params['categoryid'] : this.category = 1;
      // params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    });
    this.getProducts();

  }

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
      });
  }


}
