import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductResponse } from '../model/product-response';
import { Product } from '../model/product';
import { CategoryResponse } from '../model/category-response';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';

  getProducts(page: number, size: number = 10): Observable<ProductResponse> {
    const url = `${this.baseUrl}?page=${page}&size=${size}`;
    return this.http.get<ProductResponse>(url);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }

  getProductsByKeyword(
    keyword: string,
    page: number,
    size: number = 10,
  ): Observable<ProductResponse> {
    const url = `${this.baseUrl}/search/findByNameContaining`;
    const params = new HttpParams()
      .set('name', keyword)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<ProductResponse>(url, { params });
  }

  getProductsByCategory(
    categoryId: number,
    page: number,
    size: number = 10,
  ): Observable<ProductResponse> {
    const url = `${this.baseUrl}/search/findByCategoryId`;
    const params = new HttpParams()
      .set('id', categoryId.toString())
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<ProductResponse>(url, { params });
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoryResponse>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }
}
