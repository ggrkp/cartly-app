import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductResponse } from '../model/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductResponse>('http://localhost:8080/api/products')
      .pipe(map((response: ProductResponse) => response._embedded.products));
  }
}
