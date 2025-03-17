import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Lowernav from "@/components/layouts/lowernav";
import Copyright from "@/components/layouts/copyright";
import Script from "next/script";
import BreadcrumbWrapper from "@/components/layouts/breadcrumbwrapper";

// ✅ フォント設定（Noto Sans JP）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// ✅ OGP画像のデフォルトURL
const ogpImageUrl = "https://meshiden.jp/ogp-default.jpg";

// ✅ メタデータ設定（OGP & Twitter）
export const metadata: Metadata = {
  title: "iIDa ポートフォリオサイト",
  description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
  openGraph: {
    title: "iIDa ポートフォリオサイト",
    description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
    url: "https://meshiden.jp",
    images: [{ url: ogpImageUrl }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iIDa ポートフォリオサイト",
    description: "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。",
    images: [ogpImageUrl],
  },
};

// ✅ ルートレイアウトコンポーネント
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || ""; // GA4の環境変数を適切に取得

  return (
    <html lang="ja">
      <head>
        {/* Adobe Fonts 読み込み */}
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css" />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        {/* ヘッダー */}
        <Header />
        <Toaster position="top-right" />
        
        {/* メインコンテンツ */}
        {children}
        <BreadcrumbWrapper />

        {/* フッター */}
        <Footer />
        <Lowernav />
        <Copyright />

        {/* ✅ FontAwesome のスクリプト */}
        <Script src="https://kit.fontawesome.com/4e6b2556d7.js" strategy="afterInteractive" />

        {/* ✅ Google Analytics（GA_IDがある場合のみ） */}
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

        {/* ✅ Google reCAPTCHA のスクリプト */}
        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
