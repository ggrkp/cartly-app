import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  totalPages = input(0);
  currentPage = input(1);
  pageChanged = output<number>();

  totalPagesArray = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  onPageClick(page: number | string, event: Event) {
    event.preventDefault();
    if (typeof page === 'number') {
      this.pageChanged.emit(page);
    }
  }
}
