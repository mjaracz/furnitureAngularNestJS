import * as fromSidebar from './side-bar';
import * as fromProducts from './products';
import {ActionReducerMap, createSelector} from '@ngrx/store';

export interface RootState {
  sidebar: fromSidebar.State;
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<RootState> = {
  sidebar: fromSidebar.sideBarReducer,
  products: fromProducts.productsReducer
};
