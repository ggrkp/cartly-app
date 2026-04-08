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

  getProducts(categoryId: number | null): Observable<Product[]> {
    // Determine the URL based on whether we have a categoryId
    const url = categoryId
      ? `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`
      : this.baseUrl;

    return this.http
      .get<ProductResponse>(url)
      .pipe(map((response: ProductResponse) => response._embedded.products));
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoryResponse>('http://localhost:8080/api/product-category')
      .pipe(map((response: CategoryResponse) => response._embedded.productCategory));
  }
}
