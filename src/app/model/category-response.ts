import { Category } from './category';

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
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
