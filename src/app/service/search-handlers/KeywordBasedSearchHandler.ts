import { Observable } from 'rxjs';
import { ProductApi } from '../product-api';
import { Product } from '../../model/product';
import { inject } from '@angular/core';
import { ProductSearchHandler } from './ProductSearchHandler';
import { ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeywordBasedSearchHandler implements ProductSearchHandler {
  productApi: ProductApi = inject(ProductApi);

  canHandle(params: ParamMap): boolean {
    return params.has('keyword');
  }

  handle(params: ParamMap): Observable<Product[]> {
    const keyword = params.get('keyword')!;
    return this.productApi.getProductsByKeyword(keyword);
  }
}
