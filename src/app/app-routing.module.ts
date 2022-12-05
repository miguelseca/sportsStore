import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:productid', component: ProductDetailComponent},
  {path: 'category/:categoryid', component: CategoryListComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
