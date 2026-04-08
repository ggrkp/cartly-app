import { Component, inject } from '@angular/core';
import { ProductApi } from '../../../service/product-api';
import { Product } from '../../../model/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private productApi = inject(ProductApi);

  products: Product[] = [];

  ngOnInit(): void {
    this.productApi.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
