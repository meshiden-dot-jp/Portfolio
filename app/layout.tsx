import type { Metadata } from "next";
import { client } from "@/lib/client";
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

// ✅ デフォルトOGP画像
const defaultOGP = "https://meshiden.jp/ogp-default.jpg";

// ✅ メタデータを動的に生成
export async function generateMetadata(
  { params }: { params: { id?: string } }
): Promise<Metadata> {
  const baseUrl = "https://meshiden.jp";
  let ogImage = defaultOGP;
  let title = "iIDa ポートフォリオサイト";
  let description = "フロントエンドエンジニア兼UIデザイナー、iIDaのポートフォリオサイトです。";
  let url = baseUrl;

  // `/blog/[id]` または `/work/[id]` の場合は個別データ取得
  if (params?.id) {
    try {
      const isBlog = process.env.NEXT_PUBLIC_PAGE_TYPE === "blog";
      const isWork = process.env.NEXT_PUBLIC_PAGE_TYPE === "work";

      const endpoint = isBlog ? "tech-blog" : isWork ? "work" : null;

      if (endpoint) {
        const data = await client.get({
          endpoint,
          contentId: params.id,
        });

        title = data.title || title;
        description = data.description || description;
        ogImage = data.header_image?.url || ogImage;
        url = `${baseUrl}/${isBlog ? "blog" : "work"}/${params.id}`;
      }
    } catch (error) {
      console.error(`OGP取得エラー:`, error);
    }
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// ✅ ルートレイアウトコンポーネント
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css" />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        <Toaster position="top-right" />
        {children}
        <BreadcrumbWrapper />
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
