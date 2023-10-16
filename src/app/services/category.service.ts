import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor( private http : HttpClient) {}
    getCategories() : Observable<ICategory[]>{
      return this.http.get<ICategory[]>('http://localhost:3000/categories')
    }
    getCategoryById(id: number | string): Observable<ICategory> {
      return this.http.get<ICategory>(`http://localhost:3000/categories/${id}`)
    }
    addCategory(product: ICategory): Observable<ICategory> {
      return this.http.post<ICategory>(`http://localhost:3000/categories`, product)
    }
    updateCategory(product: ICategory): Observable<ICategory> {
      return this.http.put<ICategory>(`http://localhost:3000/categories/${product.id}`, product)
    }
    removeCategory(id: number): Observable<ICategory[]> {
      return this.http.delete<ICategory[]>(`http://localhost:3000/categories/${id}`);
    }
    }
