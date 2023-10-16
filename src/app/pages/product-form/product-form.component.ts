import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { UploadService } from 'src/app/services/upload.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm = this.fb.group({
    name: [''],
    price: [0],
    desc: [''],
    image: File,
  });
  product!: IProduct;
  //enums
  mode: 'create' | 'update' = 'create';
  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private uploadService: UploadService
  ) {
    // console.log('contractor')
  }
  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    if (id) {
      this.product = await (
        await lastValueFrom(this.productService.getProductById(+id))
      ).data;
      this.productForm.patchValue(this.product);
      this.productForm.patchValue(this.product);
      this.mode = 'update';
    }
  }
  async onSubmit() {
    // console.log(1);
    try {
      if (this.mode === 'create') {
        await lastValueFrom(
          this.productService.addProduct(this.productForm.value as IProduct)
        );
        // console.log(productResult);
        alert('Ban da them thanh cong');
      } else {
        await lastValueFrom(
          this.productService.updateProduct({
            ...this.product,
            ...this.productForm.value,
          } as IProduct)
        );
        alert('Ban da update thanh cong');
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async onImageChanged(event: any) {
    const file = event.target.files[0];
    const imageURL = await lastValueFrom(this.uploadService.uploadImage(file));
    console.log('imageURL', imageURL);
    // this.productForm.patchValue({ image: file });
    // console.log(file);
  }
}
