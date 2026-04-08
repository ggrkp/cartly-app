import { Product } from './product';

export interface ProductResponse {
  _embedded: {
    products: Product[];
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
