import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css'],
})
export class FeaturedProductComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = this.products
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
}
