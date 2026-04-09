import { Observable } from 'rxjs';
import { ProductApi } from '../product-api';
import { Product } from '../../model/product';
import { inject } from '@angular/core/primitives/di';
import { ProductSearchHandler } from './ProductSearchHandler';
import { ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryBasedSearchHandler implements ProductSearchHandler {
  productApi: ProductApi = inject(ProductApi);

  canHandle(params: ParamMap): boolean {
    return params.has('categoryId');
  }
  handle(params: ParamMap): Observable<Product[]>{
    const categoryId = params.get('categoryId');
    return this.productApi.getProductsByCategory(Number(categoryId));
  }
}
