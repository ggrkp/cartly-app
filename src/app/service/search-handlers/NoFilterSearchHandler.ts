import { Observable } from 'rxjs';
import { ProductApi } from '../product-api';
import { inject } from '@angular/core';
import { ProductSearchHandler } from './ProductSearchHandler';
import { ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductResponse } from '../../model/product-response';

@Injectable({ providedIn: 'root' })
export class NoFilterSearchHandler implements ProductSearchHandler {
  productApi: ProductApi = inject(ProductApi);

  canHandle(params: ParamMap): boolean {
    return true;
  }
  handle(params: ParamMap, currentPage: number): Observable<ProductResponse> {
    return this.productApi.getProducts(Number(currentPage));
  }
}
