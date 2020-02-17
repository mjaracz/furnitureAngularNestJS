import {Currency} from './currency';

export interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
  currency?: Currency;
  description: string;
  type: ProductsType;
}
export enum ProductsType {
  furniture,
  additional,
  lamps
}
