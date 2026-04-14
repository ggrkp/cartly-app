import { Observable } from 'rxjs';
import { ProductApi } from '../product-api';
import { inject } from '@angular/core/primitives/di';
import { ProductSearchHandler } from './ProductSearchHandler';
import { ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductResponse } from '../../model/product-response';

@Injectable({ providedIn: 'root' })
export class CategoryBasedSearchHandler implements ProductSearchHandler {
  productApi: ProductApi = inject(ProductApi);

  canHandle(params: ParamMap): boolean {
    return params.has('categoryId');
  }
  handle(params: ParamMap, currentPage: number): Observable<ProductResponse> {
    const categoryId = params.get('categoryId');
    const pageNo = params.get('page') || '0';
    return this.productApi.getProductsByCategory(Number(categoryId), currentPage);
  }
}
