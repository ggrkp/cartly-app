import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

export interface ProductSearchHandler {
  canHandle(params: ParamMap): boolean;
  handle(params: ParamMap): Observable<Product[]>;
}
