import { Category } from './category';
import { Page } from './page';

export interface CategoryResponse {
  _embedded: {
    productCategory: Category[];
  };
  _links: {
    self: {
      href: string;
    };
    profile: {
      href: string;
    };
  };
  page: Page;
}
