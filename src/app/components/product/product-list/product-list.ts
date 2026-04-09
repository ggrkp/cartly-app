import { Component, inject, signal } from '@angular/core';
import { ProductApi } from '../../../service/product-api';
import { Product } from '../../../model/product';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NoFilterSearchHandler as NoCriteriaSearchHandler } from '../../../service/search-handlers/NoFilterSearchHandler';
import { CategoryBasedSearchHandler } from '../../../service/search-handlers/CategoryBasedSearchHandler';
import { KeywordBasedSearchHandler } from '../../../service/search-handlers/KeywordBasedSearchHandler';
import { ProductSearchHandler } from '../../../service/search-handlers/ProductSearchHandler';
import { PRODUCT_SEARCH_HANDLERS } from '../../../service/search-handlers/product-search-handlers.token';

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
  private searchHandlers = inject(PRODUCT_SEARCH_HANDLERS);

  categoryId: number | null = null;
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const handler = this.searchHandlers.find((handler) => handler.canHandle(params));
          return handler!.handle(params);
        }),
      )
      .subscribe((data: Product[]) => {
        this.products.set(data);
      });
  }
}
