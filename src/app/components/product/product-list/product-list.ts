import { Component, inject, signal } from '@angular/core';
import { ProductApi } from '../../../service/product-api';
import { Product } from '../../../model/product';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private productApi = inject(ProductApi);
  private activatedRoute = inject(ActivatedRoute);

  categoryId: number | null = null;
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          return this.productApi.getProducts(id ? +id : null);
        }),
      )
      .subscribe((data: Product[]) => {
        this.products.set(data);
      });
  }
}
