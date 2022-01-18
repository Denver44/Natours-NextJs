import { HYDRATE } from 'next-redux-wrapper';
import { Action, actionTypes } from './actions.interfaces';
import { AppState } from './data.interfaces';

export const exampleInitialState: AppState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

const exampleReducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE }
): AppState => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
};

export default exampleReducer;
