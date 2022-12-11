import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MessageComponent } from './pages/message/message.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:productid', component: ProductDetailComponent},
  {path: 'category/:categoryid', component: CategoryListComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'message', component: MessageComponent},
  {path: 'contacts', component: ContactsComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
