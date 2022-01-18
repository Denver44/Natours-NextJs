import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginUser, LoginState } from '../redux/auth';
import { RootState } from '../redux/reducer';

const useLoginStatus = (loginState: LoginState) => {
  const [isLogin, setIsLogin] = useState(false);
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const dispatch = useDispatch();
  const [, setCookie]: any = useCookies(['auth']);

  useEffect(() => {
    if (loginUser?.isLogin && loginState?.data && loginState?.data?.admin) {
      const payload: any = {
        admin: {
          id: loginState?.data?.admin?.id,
          firstName: loginState?.data?.admin?.firstName,
          lastName: loginState?.data?.admin?.lastName,
          email: loginState?.data?.admin?.email,
          phone: loginState?.data?.admin?.phone,
        },
        accessToken: loginState?.data?.adminSession?.accessToken,
        session: loginState?.data?.adminSession,
      };
      setCookie('auth', JSON.stringify(payload), { path: '/' });
      setIsLogin(true);
    }
    // return () => {};
  }, [loginUser]);

  useEffect(() => {
    if (loginState?.data?.adminSession?.accessToken) {
      dispatch(
        fetchLoginUser(`Bearer ${loginState?.data?.adminSession?.accessToken}`)
      );
    }
    // return () => {};
  }, [loginState]);

  return isLogin;
};

export default useLoginStatus;
