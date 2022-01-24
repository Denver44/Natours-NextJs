import { put, takeEvery } from 'redux-saga/effects';
import {
  fetchLoginUserFail,
  fetchLoginUserReset,
  fetchLoginUserStarted,
  fetchLoginUserSuccess,
  loginFail,
  loginReset,
  loginStarted,
  loginSuccess,
} from './actions';
import { actionTypes } from './actions.interfaces';
import { getLoginUser, loginAPI, logoutAPI } from './api';
import * as actionIs from './actions.interfaces';
import { ResponseGenerator } from './data.interfaces';

// Login
export function* sagaDoLogin(action: actionIs.DoLogin) {
  yield put(loginStarted());
  try {
    const data: ResponseGenerator = yield loginAPI(action.data);
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFail(e.message));
  }
}

// Fetch Login User
export function* sagaFetchLoginUser(action: actionIs.FetchLoginUser) {
  yield put(fetchLoginUserStarted());
  try {
    const data: ResponseGenerator = yield getLoginUser(action.data);
    yield put(fetchLoginUserSuccess(data));
    // TODO: for permission
    // if (data && data.user) {
    //     if (
    //         data.user.roleHasPermissions &&
    //         data.user.roleHasPermissions.permissions &&
    //         data.user.roleHasPermissions.permissions.length > 0
    //     ) {
    //         yield put(definePermission(data.user.roleHasPermissions.permissions));
    //     }
    // }
  } catch (e) {
    yield put(fetchLoginUserFail(e.message));
  }
}

// Logout User
export function* sagaLogoutUser(action: actionIs.LogoutUser) {
  try {
    yield put(loginReset());
    yield put(fetchLoginUserReset());
    if (!action.data.noApiCall) {
      yield logoutAPI();
    }
  } catch (e) {
    // console.log('sagaLogoutUser', e);
  }
}

export default function* rootSaga() {
  // Login
  yield takeEvery(actionTypes.DO_LOGIN, sagaDoLogin);
  // Fetch Login User
  yield takeEvery(actionTypes.FETCH_LOGIN_USER, sagaFetchLoginUser);
  // Logout User
  yield takeEvery(actionTypes.LOGOUT_USER, sagaLogoutUser);
}
