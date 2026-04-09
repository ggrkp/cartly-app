import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductResponse } from '../model/product-response';
import { Category } from '../model/category';
import { CategoryResponse } from '../model/category-response';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/products';

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductResponse>(`${this.baseUrl}`)
      .pipe(map((response: ProductResponse) => response._embedded.products));
  }

  getProductsByKeyword(keyword: string): Observable<Product[]> {
    return this.http
      .get<ProductResponse>(`${this.baseUrl}/search/findByNameContaining?name=${keyword}`)
      .pipe(map((response: ProductResponse) => response._embedded.products));
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http
      .get<ProductResponse>(`${this.baseUrl}/search/findByCategoryId?id=${categoryId}`)
      .pipe(map((response: ProductResponse) => response._embedded.products));
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoryResponse>('http://localhost:8080/api/product-category')
      .pipe(map((response: CategoryResponse) => response._embedded.productCategory));
  }
}
