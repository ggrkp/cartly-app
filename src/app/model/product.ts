import { Category } from './category';

export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  stockUnits: number;
  dateCreated: Date;
  lastUpdated: Date;
}
