import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../model/product-response';

export interface ProductSearchHandler {
  canHandle(params: ParamMap): boolean;
  handle(params: ParamMap, currentPage: number): Observable<ProductResponse>;
}
