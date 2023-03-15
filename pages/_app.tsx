import React from 'react';
import '@/styles/global.css'
import '@/styles/loading.css'
import type { AppProps } from 'next/app'
import { DataProvider } from './../store/GlobalState'
import Layout from './../components/Layout';
import Notify from './../components/Notify';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/`, `/applyJob`, `/login`, `/register`, `/forgot`].includes(appProps.router.pathname))
  return (
    <DataProvider>
      <Notify />
      
        <Component {...pageProps} />
      
    </DataProvider>
  );
  return (
    <DataProvider>
      <Layout>
        <Notify/>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

