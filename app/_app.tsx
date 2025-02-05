import { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="//typesquare.com/3/tsst/script/ja/typesquare.js?66fa1b79217842cc962a6c82ac1e02e5"
        strategy="afterInteractive"
        charSet="utf-8"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
