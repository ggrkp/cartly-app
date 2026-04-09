import { Routes } from '@angular/router';
import { ProductList } from './components/product/product-list/product-list';
import { ProductDetails } from './components/product/product-details/product-details';

export const routes: Routes = [
  {
    path: 'products/:productId',
    component: ProductDetails,
  },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'category/:categoryId',
    component: ProductList,
  },
  {
    path: 'search/:keyword',
    component: ProductList,
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
