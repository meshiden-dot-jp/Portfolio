import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Lowernav from "@/components/layouts/lowernav";
import Copyright from "@/components/layouts/copyright";
import Script from "next/script";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.GA_ID || '';
  return (
    <html lang="ja">
      <head>
        <title>iIDa ポートフォリオサイト</title>
        <meta property="og:title" content="iIDa ポートフォリオサイト" />
        <meta property="og:description" content="フロントエンドエンジニア兼UIデザーナー、iIDaのポートフォリオサイトです。" />
        <meta property="og:image" content="あなたのサイトの画像URL" />
        <meta property="og:url" content="https://meshiden.jp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:title' content='iIDa ポートフォリオサイト' />
        <meta name='twitter:description' content='フロントエンドエンジニア兼UIデザーナー、iIDaのポートフォリオサイトです。' />
        <meta name='twitter:image' content='画像URL' />
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css"></link>
        <Script src="https://kit.fontawesome.com/4e6b2556d7.js"></Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy='afterInteractive'
          async
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Lowernav />
        <Copyright />
      </body>
    </html>
  );
}
