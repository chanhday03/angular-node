import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
    categories!: ICategory[];
    constructor(private categoryService: CategoryService) {}
    async ngOnInit() {
      try {
        this.categories = await lastValueFrom(this.categoryService.getCategories());
        console.log(this.categories);
      } catch (error) {
        console.log(error);
      }
    }
    async removeCategory(id: number) {
      this.categories = await lastValueFrom(this.categoryService.removeCategory(id));
      this.categories = await lastValueFrom(this.categoryService.getCategories());
    }
}
