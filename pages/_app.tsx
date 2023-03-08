import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from './../components/Layout';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/`, `/applyJob`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
