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
  error?: string | null;
}

export interface LoginUserState {
  data?: LoginSuccessResponse | any;
  isLogin?: boolean;
  error?: string | null;
  isLoading?: boolean;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
