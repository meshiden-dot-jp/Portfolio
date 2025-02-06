"use client"; // 🚀 クライアントコンポーネントとして動作させる

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ App Router 用に修正

const ThanksPage = () => {
  const router = useRouter(); // ✅ useRouter をコンポーネント内で定義

  return (
    <div className="w-[70%] m-auto text-center py-20">
      <h1 className="text-2xl font-bold mb-4">お問い合わせありがとうございました</h1>
      <p className="mb-6">
        お問い合わせを受け付けました。  
        近日中に担当者よりご連絡いたします。
      </p>
      <Button onClick={() => router.push("/")} className="w-1/4 mb-auto">
        ホームへ戻る
      </Button>
    </div>
  );
};

export default ThanksPage;
