import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/search/search.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CategoriesComponent } from './shared/categories-banner/categories.component';
import { ButtonModule } from 'primeng/button';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent,
    BannerComponent,
    CategoriesComponent,
    ProductItemComponent,
    FeaturedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
