import {Cart} from '../interfaces/carts';
import * as cartsAction from '../actions/carts';

export interface State {
  carts: Cart[];
  isLoading: boolean;
  error: Error;
}

const InitialState = {
  carts: [],
  isLoading: false,
  error: undefined
};

export const cartsReducer  = (state: State = InitialState, action: cartsAction.Action): State => {
  switch (action.type) {
    case cartsAction.ActionType.StartFetch: {
      return {
        ...state,
        isLoading: true
      };
    }
    case cartsAction.ActionType.FetchSuccess: {
      return {
        ...state,
        isLoading: false,
        carts: action.payload
      };
    }
    case cartsAction.ActionType.FetchFailure: {
      return {
        ...state,
        isLoading: false,
        carts: [],
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
