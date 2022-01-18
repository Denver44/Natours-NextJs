import { HYDRATE } from 'next-redux-wrapper';
import { deepClone } from '../../libs/helpers';
import { Action, actionTypes } from './actions.interfaces';
import { LoginState, LoginUserState } from './data.interfaces';

const initialLoginState: LoginState = {
  data: {},
  error: null,
  isLoading: false,
};

export const getInitialLoginState = () => deepClone(initialLoginState);

export const login = (
  state = getInitialLoginState(),
  action: Action | { type: typeof HYDRATE }
): LoginState => {
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        ...{ isLoading: true },
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ data: action.data, error: null, isLoading: false },
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        ...{ error: action.data, isLoading: false },
      };

    case actionTypes.LOGIN_RESET:
      return getInitialLoginState();

    default:
      return state;
  }
};

const initialLoginUserState: LoginUserState = {
  data: {},
  isLogin: false,
  error: null,
  isLoading: false,
};

export const getInitialLoginUserState = () => deepClone(initialLoginUserState);

export const loginUser = (
  state = getInitialLoginUserState(),
  action: Action | { type: typeof HYDRATE }
): LoginUserState => {
  switch (action.type) {
    case actionTypes.FETCH_LOGIN_USER:
      return {
        ...state,
        ...{ isLoading: true },
      };

    case actionTypes.FETCH_LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...{ data: action.data, error: null, isLoading: false, isLogin: true },
      };

    case actionTypes.FETCH_LOGIN_USER_UPDATE:
      return {
        ...state,
        ...{
          data: {
            ...state.data,
            ...action.data,
          },
          error: null,
          isLoading: false,
          isLogin: true,
        },
      };

    case actionTypes.FETCH_LOGIN_USER_FAIL:
      return {
        ...state,
        ...{
          error: action.data,
          isLoading: false,
        },
      };

    case actionTypes.FETCH_LOGIN_USER_RESET:
      return getInitialLoginUserState();

    default:
      return state;
  }
};
