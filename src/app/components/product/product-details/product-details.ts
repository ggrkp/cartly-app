import { Component, inject, signal } from '@angular/core';
import { ProductApi } from '../../../service/product-api';
import { Product } from '../../../model/product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private productApi: ProductApi = inject(ProductApi);
  private activatedRoute = inject(ActivatedRoute);
   isLoading = signal(false);
  product = signal<Product | null>(null);

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.isLoading.set(true);
        const productId = Number(params.get('productId'));
        return this.productApi.getProduct(productId);
      })
    ).subscribe({
      next: (data) => {
        this.product.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
        this.product.set(null);
        this.isLoading.set(false);
      }
    });
  }
}
