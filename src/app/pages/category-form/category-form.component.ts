import { lastValueFrom } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
    categoryForm = this.fb.group({
      name: [''],
      price: [0],
      desc: [''],
    });
    category!: ICategory;
    //enums
    mode: 'create' | 'update' = 'create';
    constructor(
      private router: ActivatedRoute,
      private fb: FormBuilder,
      private categoryService:  CategoryService
    ) {
      // console.log('contractor')
    }
    async ngOnInit() {
      const { id } = this.router.snapshot.params;
      if (id) {
        this.category = await lastValueFrom(this.categoryService.getCategoryById(+id));
        this.categoryForm.patchValue(this.category);
        this.categoryForm.patchValue(this.category);
        this.mode = 'update';
      }
    }
    async onSubmit() {
      // console.log(1);
      try {
        if (this.mode === 'create') {
          await lastValueFrom(
            this.categoryService.addCategory(this.categoryForm.value as ICategory)
          );
          // console.log(productResult);
          alert('Ban da them thanh cong');
        }else{
          await lastValueFrom(
            this.categoryService.updateCategory({...this.category , ... this.categoryForm.value} as ICategory))
          alert('Ban da update thanh cong');
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }