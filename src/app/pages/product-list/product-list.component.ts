import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from '../../models/category';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  private getProducts() {
    this.productService
      .getProducts()

      .subscribe((prod) => {
        console.log(prod);

        this.products = prod;
      });
  }

  private getCategories() {
    this.categoryService
      .getCategories()

      .subscribe((cats) => {
        console.log(cats);

        this.categories = cats;
      });
  }

}
