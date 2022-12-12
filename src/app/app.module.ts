import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

//================================ COMPONENTS ==========================================================
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CategoriesComponent } from './shared/categories-banner/categories.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { GalleryComponent } from './shared/gallery/gallery.component';

//================================Prime NG Modules =====================================================
import { ButtonModule } from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {TooltipModule} from 'primeng/tooltip';
import { MessageComponent } from './pages/message/message.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    CategoriesComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    CategoryListComponent,
    ProductDetailComponent,
    GalleryComponent,
    CartPageComponent,
    MessageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule,
    InputNumberModule,
    FormsModule,
    BadgeModule,
    CheckboxModule,
    ToastModule,
    TooltipModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
