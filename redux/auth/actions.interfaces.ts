/* eslint-disable no-unused-vars */
import { LoginPayload, LoginSuccessResponse } from './data.interfaces';

export enum actionTypes {
  DO_LOGIN = 'DO_LOGIN',
  LOGIN_STARTED = 'LOGIN_STARTED',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGIN_RESET = 'LOGIN_RESET',

  FETCH_LOGIN_USER = 'FETCH_LOGIN_USER',
  FETCH_LOGIN_USER_STARTED = 'FETCH_LOGIN_USER_STARTED',
  FETCH_LOGIN_USER_SUCCESS = 'FETCH_LOGIN_USER_SUCCESS',
  FETCH_LOGIN_USER_FAIL = 'FETCH_LOGIN_USER_FAIL',
  FETCH_LOGIN_USER_RESET = 'FETCH_LOGIN_USER_RESET',

  FETCH_LOGIN_USER_UPDATE = 'FETCH_LOGIN_USER_UPDATE',

  LOGOUT_USER = 'LOGOUT_USER',
}

export type Action =
  | DoLogin
  | LoginStarted
  | LoginSuccess
  | LoginFail
  | LoginReset
  | FetchLoginUser
  | FetchLoginUserStarted
  | FetchLoginUserSuccess
  | FetchLoginUserFail
  | FetchLoginUserReset
  | FetchLoginUserUpdate
  | LogoutUser;

export interface DoLogin {
  type: actionTypes.DO_LOGIN;
  data: LoginPayload;
}

export interface LoginStarted {
  type: actionTypes.LOGIN_STARTED;
}

export interface LoginSuccess {
  type: actionTypes.LOGIN_SUCCESS;
  data: LoginSuccessResponse;
}

export interface LoginFail {
  type: actionTypes.LOGIN_FAIL;
  data: string;
}

export interface LoginReset {
  type: actionTypes.LOGIN_RESET;
}

export interface FetchLoginUser {
  type: actionTypes.FETCH_LOGIN_USER;
  data: string;
}

export interface FetchLoginUserStarted {
  type: actionTypes.FETCH_LOGIN_USER_STARTED;
}

export interface FetchLoginUserSuccess {
  type: actionTypes.FETCH_LOGIN_USER_SUCCESS;
  data: LoginSuccessResponse;
}

export interface FetchLoginUserFail {
  type: actionTypes.FETCH_LOGIN_USER_FAIL;
  data: string;
}

export interface FetchLoginUserReset {
  type: actionTypes.FETCH_LOGIN_USER_RESET;
}

export interface LogoutUser {
  type: actionTypes.LOGOUT_USER;
  data: {
    // sessionId: string;
    noApiCall?: boolean;
  };
}

export interface FetchLoginUserUpdate {
  type: actionTypes.FETCH_LOGIN_USER_UPDATE;
  data: any;
}
