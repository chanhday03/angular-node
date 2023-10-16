import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
// export class ProductDetailComponent {
//   @Input() product!: IProduct;
//   @Output() onRemove = new EventEmitter();
//   showId(id: any) {
//     this.onRemove.emit(id);
//   }
// }
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    // inject service xử lý router
    private router: ActivatedRoute,
    // inject service product
    private productService: ProductService
  ) {
    //thuc thi
    this.router.params.subscribe(({ id }) => {
      this.productService.getProductById(+id).subscribe({
        next: (data) => (this.product = data.data),
        error: (err) => console.log(err.message),
      });
    });
  }
}
