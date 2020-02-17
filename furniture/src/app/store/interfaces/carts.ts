import {Currency} from './currency';
import {Products} from './products';

export interface Cart {
  user_id: string;
  cart_id: string;
  date_time: Date;
  cart_currency: Currency | string;
  cart_price?: number;
  products: Products[];
}
