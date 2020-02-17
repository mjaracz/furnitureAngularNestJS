import * as fromProducts from './products';
import * as fromCarts from './carts';
import {ActionReducerMap} from '@ngrx/store';

export interface RootState {
  products: fromProducts.State;
  carts: fromCarts.State;
}

export const reducers: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer,
  carts: fromCarts.cartsReducer
};
