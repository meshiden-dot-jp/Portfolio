import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header";
import Breadcrumb from "@/components/layouts/breadcrumb";
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

export const metadata: Metadata = {
  title: "iIDa Frontend Engineer/UI Designer",
  description: "This is iIDa's portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css"></link>
        <Script src="https://kit.fontawesome.com/4e6b2556d7.js"></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Header />
        {children}
        <Breadcrumb />
        <Footer />
        <Lowernav />
        <Copyright />
      </body>
    </html>
  );
}
