import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategorySlideComponent } from './components/category-slide/category-slide.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { RecommendProductComponent } from './components/recommend-product/recommend-product.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthInterceptor } from './src/app/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchBoxPipe,
    ProductDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CategorySlideComponent,
    BlogSectionComponent,
    BannerSectionComponent,
    RecommendProductComponent,
    FeaturedProductComponent,
    NotFoundComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    DashboardComponent,
    ProductFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
