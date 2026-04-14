import { Page } from './page';
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
  page: Page;
}
