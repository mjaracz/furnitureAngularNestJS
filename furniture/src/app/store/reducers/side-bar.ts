import * as Actions from '../actions/side-bar';

export interface State {
  isOpen: boolean;
}

const initialState = {
  isOpen: false
};

export const sideBarReducer = (state = initialState, action: Actions.ShowAction): State => {
  switch (action.type) {
    case Actions.SHOW: {
      return {
        isOpen: !state.isOpen
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
