import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Lowernav from "@/components/layouts/lowernav";
import Copyright from "@/components/layouts/copyright";
import Script from "next/script";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iIDa ポートフォリオサイト",
  description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
  openGraph: {
    title: "iIDa ポートフォリオサイト",
    description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
    url: "https://meshiden.jp",
    images: [{ url: "https://yourdomain.com/image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iIDa ポートフォリオサイト",
    description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
    images: ["https://yourdomain.com/image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.GA_ID || '';

  return (
    <html lang="ja">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css"></link>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Lowernav />
        <Copyright />

        {/* FontAwesome のスクリプト */}
        <Script src="https://kit.fontawesome.com/4e6b2556d7.js" strategy="afterInteractive" />

        {/* Google Analytics のスクリプト（GA_IDがある場合のみ） */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
