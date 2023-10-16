import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthGuard } from './src/app/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/add', component: CategoryFormComponent },
      { path: 'categories/:id/edit', component: CategoryFormComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: ProductFormComponent },
      { path: 'products/:id/edit', component: ProductFormComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
