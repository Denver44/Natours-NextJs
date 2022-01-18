import App, { AppProps } from 'next/app';
// import { AppContextType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import React from 'react';
import { LayoutContextProvider } from '../context/LayoutContext';
import { wrapper } from '../redux/store';
import 'tailwindcss/tailwind.css';

// import Cookies from 'universal-cookie';
// import { API } from '../libs/helpers';

// declare const window: any;
const Noop = ({ children }) => children;

const MyApp = ({ Component, pageProps }: AppProps | any) => {
  const Layout = Component.Layout || Noop;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Natours</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <LayoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: any) => {
  let appProps: any = {};

  // const ctx = appContext.ctx;
  // if (appContext.ctx.req) {
  //     const cookies = new Cookies(ctx.req.headers.cookie);
  //     const authCookies: any = cookies.get('auth');

  //     // Server Side Axios Setup.
  //     const axiosInstance = API(true);
  //     axiosInstance.interceptors.request.use(
  //         (c: any) => {
  //             if (authCookies?.session?.accessToken) {
  //                 c.headers['authorization'] = `Bearer ${authCookies?.session?.accessToken}`;
  //             }
  //             return c;
  //         },
  //         (error: any) => {
  //             // Do something with request error
  //             return Promise.reject(error);
  //         }
  //     );
  // This Line will trigger component level getInitialProps
  appProps = await App.getInitialProps(appContext);
  // const statusCode = appProps?.pageProps?.statusCode || 200;

  //     if (statusCode < 400) {
  //         if (authCookies) {
  //             if (authCookies?.session?.id) {
  //                 if (ctx.pathname === '/login') {
  //                     ctx.res.writeHead(301, { Location: '/schools' });
  //                     ctx.res.end();
  //                 }
  //             } else {
  //                 if (ctx.pathname !== '/login') {
  //                     ctx.res.writeHead(301, { Location: '/login' });
  //                     ctx.res.end();
  //                 }
  //             }
  //         } else {
  //             if (ctx.pathname !== '/login') {
  //                 ctx.res.writeHead(301, { Location: '/login' });
  //                 ctx.res.end();
  //             }
  //         }
  //     }
  // } else {
  // appProps = await App.getInitialProps(appContext);
  //     const cookies = new Cookies();
  //     const authCookies: any = cookies.get('auth');
  //     if (authCookies) {
  //         if (authCookies?.session?.id) {
  //             if (ctx.pathname === '/login') {
  //                 window.location = '/schools';
  //             }
  //         } else {
  //             if (ctx.pathname !== '/login') {
  //                 window.location = '/login';
  //             }
  //         }
  //     } else {
  //         if (ctx.pathname !== '/login') {
  //             window.location = '/login';
  //         }
  //     }
  // }

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
