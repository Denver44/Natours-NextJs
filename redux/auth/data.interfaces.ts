export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  [key: string]: any;
}

export interface LoginState {
  data?: LoginSuccessResponse | any;
  isLoading?: boolean;
  error?: string;
}

export interface LoginUserState {
  data?: LoginSuccessResponse | any;
  isLogin?: boolean;
  error?: string;
  isLoading?: boolean;
}
