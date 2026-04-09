// product-search-handlers.token.ts
import { InjectionToken } from '@angular/core';
import { ProductSearchHandler } from './ProductSearchHandler';

export const PRODUCT_SEARCH_HANDLERS = new InjectionToken<ProductSearchHandler[]>('PRODUCT_SEARCH_HANDLERS');