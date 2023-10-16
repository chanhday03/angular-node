import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

type APIResponseProducts = {
  status: string;
  data: IProduct[];
};
type APIResponseProduct = {
  status: string;
  data: IProduct;
};
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL: string = `http://localhost:8088/api/products`;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<APIResponseProducts> {
    return this.http.get<APIResponseProducts>(this.API_URL);
  }
  getProductById(id: number): Observable<APIResponseProduct> {
    return this.http.get<APIResponseProduct>(`${this.API_URL}/${id}`);
  }
  removeProduct(id: number): Observable<APIResponseProducts> {
    return this.http.delete<APIResponseProducts>(`${this.API_URL}/${id}`);
  }
  updateProduct(product: IProduct): Observable<APIResponseProduct> {
    return this.http.patch<APIResponseProduct>(
      `${this.API_URL}/${product._id}`,
      product
    );
  }
  addProduct(product: IProduct): Observable<APIResponseProduct> {
    return this.http.post<APIResponseProduct>(this.API_URL, product);
  }
}
