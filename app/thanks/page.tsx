"use client"; // 🚀 クライアントコンポーネントとして動作させる

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ThanksPage = () => {
  const router = useRouter();

  return (
    <div className="sm:w-[70%] w-[90%] m-auto text-center py-40">
      <h1 className="text-2xl font-bold mb-8">お問い合わせありがとうございました</h1>
      <p className="mb-16">
        お問い合わせを受け付けました。  
        近日中に担当者よりご連絡いたします。
      </p>
      <Button onClick={() => router.push("/")} className="sm:w-1/4 w-full mb-auto">
        ホームへ戻る
      </Button>
    </div>
  );
};

export default ThanksPage;
