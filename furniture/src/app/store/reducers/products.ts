import {Products} from '../interfaces/products';
import * as products from '../actions/products';

export interface State {
  items: Products[];
  isLoading: boolean;
  error: Error;
}

const initialState = {
  items: [],
  isLoading: true,
  error: undefined
};

export const productsReducer = (state: State = initialState, action: products.Actions): State => {
  switch (action.type) {
    case products.GetProductsType.StartGet: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case products.GetProductsType.FetchSuccess: {
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    }
    case products.GetProductsType.FetchFailure: {
      return {
        ...state,
        isLoading: true,
        items: [],
        error: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
