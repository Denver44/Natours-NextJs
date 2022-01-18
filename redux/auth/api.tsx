import { fetch } from '../../libs/helpers';
import { LoginPayload, LoginSuccessResponse } from './data.interfaces';

export const loginAPI = async (
  payload: LoginPayload
): Promise<LoginSuccessResponse> => {
  return await fetch('/admin/auth/login', {
    method: 'POST',
    body: payload,
  });
};

export const getLoginUser = async (
  authorization: string
): Promise<LoginSuccessResponse> => {
  return await fetch(`/admin/auth/whoAmI`, {
    headers: { Authorization: authorization },
  });
};

export const logoutAPI = async (): Promise<any> => {
  return await fetch(`/admin/auth/logout`, {
    method: 'DELETE',
    // body: { sessionId }
  });
};
