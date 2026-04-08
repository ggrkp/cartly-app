import { Component, inject, signal } from '@angular/core';
import { ProductApi } from '../../../service/product-api';
import { Category } from '../../../model/category';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  categories = signal<Category[]>([]);
  productApi = inject(ProductApi);

  ngOnInit(): void {
    this.productApi.getCategories().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

}
