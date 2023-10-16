import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  async ngOnInit() {
    try {
      this.products = await (
        await lastValueFrom(this.productService.getProducts())
      ).data;
    } catch (error) {
      console.log(error);
    }
  }
  async removeProduct(id: number) {
    const response = await lastValueFrom(this.productService.removeProduct(id));
    this.products = response.data;

    // const response = await lastValueFrom(this.productService.getProducts());
    // this.products = response.data;
  }
}
