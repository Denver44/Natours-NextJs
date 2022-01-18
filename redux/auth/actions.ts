import * as actionIs from './actions.interfaces';
import { actionTypes } from './actions.interfaces';
import { LoginPayload, LoginSuccessResponse } from './data.interfaces';

export const doLogin = (data: LoginPayload): actionIs.DoLogin => {
  return {
    type: actionTypes.DO_LOGIN,
    data,
  };
};

export const loginStarted = (): actionIs.LoginStarted => {
  return { type: actionTypes.LOGIN_STARTED };
};

export const loginSuccess = (
  data: LoginSuccessResponse
): actionIs.LoginSuccess => {
  return { type: actionTypes.LOGIN_SUCCESS, data };
};

export const loginFail = (error: string): actionIs.LoginFail => {
  return { type: actionTypes.LOGIN_FAIL, data: error };
};

export const loginReset = (): actionIs.LoginReset => {
  return { type: actionTypes.LOGIN_RESET };
};

export const fetchLoginUser = (
  authorization: string
): actionIs.FetchLoginUser => ({
  type: actionTypes.FETCH_LOGIN_USER,
  data: authorization,
});

export const fetchLoginUserStarted = (): actionIs.FetchLoginUserStarted => ({
  type: actionTypes.FETCH_LOGIN_USER_STARTED,
});

export const fetchLoginUserSuccess = (
  data: LoginSuccessResponse
): actionIs.FetchLoginUserSuccess => ({
  type: actionTypes.FETCH_LOGIN_USER_SUCCESS,
  data,
});

export const fetchLoginUserFail = (
  error: string
): actionIs.FetchLoginUserFail => ({
  type: actionTypes.FETCH_LOGIN_USER_FAIL,
  data: error,
});

export const fetchLoginUserReset = (): actionIs.FetchLoginUserReset => ({
  type: actionTypes.FETCH_LOGIN_USER_RESET,
});

export const logoutUser = (
  data: {
    // sessionId: string;
    noApiCall?: boolean;
  } = {}
): actionIs.LogoutUser => ({
  type: actionTypes.LOGOUT_USER,
  data,
});

export const fetchLoginUserUpdate = (
  data: any
): actionIs.FetchLoginUserUpdate => ({
  type: actionTypes.FETCH_LOGIN_USER_UPDATE,
  data,
});
