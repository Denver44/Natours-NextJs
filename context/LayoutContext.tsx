import React, { createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { API } from '../libs/helpers';
import { fetchLoginUserReset, logoutUser } from '../redux/auth';

export interface LayoutContextModel {
  [key: string]: any;
  doLogout: () => void;
}

const initialState: LayoutContextModel = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  doLogout: () => {},
};

export const LayoutContext = createContext(initialState);

export const LayoutContextProvider: React.FC<{}> = ({ children }) => {
  const dispatch = useDispatch();
  const [{ auth }, , removeCookie]: any = useCookies(['auth']);
  // const loginUser: LoginUserState = useSelector((state: RootState) => state.loginUser);
  const axiosInstance: any = API();

  const doLogout = () => {
    if (auth) {
      // WHEN IMPLEMENT INTO PROJECT OPEN BELOW COMMENT
      dispatch(logoutUser());
      removeCookie('auth', { path: '/' });
      dispatch(fetchLoginUserReset());
    }
    window.location.replace('/login');
  };

  useEffect(() => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      (c: any) => {
        if (auth?.session?.accessToken) {
          c.headers['authorization'] = `Bearer ${auth?.session?.accessToken}`;
        }
        return c;
      },
      (error: any) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      (response: any) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      (error: any) => {
        if (error && error.response && error.response.status === 401) {
          doLogout();
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject((error.response && error.response.data) || error);
      }
    );
  }, []);

  return (
    <LayoutContext.Provider value={{ doLogout }}>
      {children}
    </LayoutContext.Provider>
  );
};
