import { Observable } from 'rxjs';
import { ProductApi } from '../product-api';
import { Product } from '../../model/product';
import { inject } from '@angular/core';
import { ProductSearchHandler } from './ProductSearchHandler';
import { ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoFilterSearchHandler implements ProductSearchHandler {
  productApi: ProductApi = inject(ProductApi);

  canHandle(params: ParamMap): boolean {
    return true;
  }
  handle(): Observable<Product[]> {
    return this.productApi.getProducts();
  }
}
