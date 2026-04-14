import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';
import { PRODUCT_SEARCH_HANDLERS } from '../../../service/search-handlers/product-search-handlers.token';
import { Pagination } from '../../common/pagination/pagination';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, Pagination],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private activatedRoute = inject(ActivatedRoute);
  private searchHandlers = inject(PRODUCT_SEARCH_HANDLERS);
  private router = inject(Router);

  categoryId: number | null = null;
  products = signal<Product[]>([]);
  totalPages = signal(0);
  currentPage = signal(1);

  ngOnInit(): void {
    combineLatest([this.activatedRoute.paramMap, this.activatedRoute.queryParamMap])
      .pipe(
        switchMap(([params, queryParams]) => {
          const pageFromUrl = Number(queryParams.get('page') || '0');
          this.currentPage.set(pageFromUrl + 1);

          const handler = this.searchHandlers.find((handler) => handler.canHandle(params));
          return handler!.handle(params, pageFromUrl);
        }),
      )
      .subscribe({
        next: (data) => {
          this.products.set(data._embedded.products);
          this.totalPages.set(data.page.totalPages);
        },
        error: (err) => {
          console.error('Error fetching products:', err);
          this.products.set([]);
        },
      });
  }

  onPageChange(currentPage: number) {
    const zeroBasedPage = currentPage - 1;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: zeroBasedPage },
      queryParamsHandling: 'merge',
    });
  }
}
