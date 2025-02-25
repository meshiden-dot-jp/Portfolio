"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Work from "@/components/layouts/top/work";
import Profile from "@/components/layouts/top/profile";
import News from "@/components/layouts/top/news";
import Techblog from "@/components/layouts/top/techblog";
import Contact from "@/components/layouts/top/contact";

export default function Home() {
  // 状態の初期化
  const [showAnimation, setShowAnimation] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // 初回アクセスの場合、トップアニメーションを表示する処理
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasShown = localStorage.getItem("hasShownTopAnimation");
      if (!hasShown) {
        setIsFirstVisit(true);
        setShowAnimation(true);
        // 5秒間アニメーションを表示
        const timer = setTimeout(() => {
          setShowAnimation(false);
          localStorage.setItem("hasShownTopAnimation", "true");
        }, 5000);
        return () => clearTimeout(timer);
      } else {
        // 初回でない場合はすぐにコンテンツを表示
        setShowContent(true);
      }
    }
  }, []);

  // ローディング中はスクロール禁止
  useEffect(() => {
    if (showAnimation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAnimation]);

  // ローディングアニメーション終了後、1秒遅延して下部コンテンツを表示
  useEffect(() => {
    if (!showAnimation && isFirstVisit) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showAnimation, isFirstVisit]);

  return (
    <div>
      {/* トップアニメーション */}
      {showAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <DotLottieReact
            className="w-[90%]"
            src="https://lottie.host/47e2cee9-6968-4148-840a-a23cb8adf682/XsoGErhB3K.lottie"
            loop
            autoplay
          />
        </div>
      )}

      {/* 下部コンテンツ（アニメーション終了後、1秒遅延して表示） */}
      {showContent && (
        <>
          <main className="w-[90%] h-[calc(100vh-60px)] m-auto min-h-screen">
            {/* トップページのメインコンテンツ */}
          </main>
          <Work />
          <Profile />
          <News />
          <Techblog />
          <Contact />
        </>
      )}
    </div>
  );
}
