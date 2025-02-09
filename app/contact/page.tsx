"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById("hidden_iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.onload = () => {
        if (submitted) {
          window.location.href = "/thanks";
        }
      };
    }
  }, [submitted]);

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-12">
      <h3>Contact</h3>
      <p className="pb-12">
        本ページに関するお問い合わせは、以下のフォームにご記入ください。
        このフォームに入力された個人情報は、お問い合わせ内容の回答のみに使用されます。
      </p>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjov6LEg5wA6uvZRpzURut9OZFU0Q8ZGM9LXwl2zorSaXag/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)} // useState を使用
        className="c-form"
      >
        <div className="pb-4">
          <div className="pb-6">
            <label htmlFor="field-name">名前・会社名
              <span className="ml-2 text-[10px] bg-slate-950 text-white px-[8px] py-[4px] rounded-sm">必須</span>
            </label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-black border-[1px]"
              name="entry.1130227589"
              type="text"
              id="field-name"
              placeholder="山田太郎"
              required
            />
          </div>

          <div className="pb-6">
            <label htmlFor="field-email">メールアドレス
              <span className="ml-2 text-[10px] bg-slate-950 text-white px-[8px] py-[4px] rounded-sm">必須</span>
            </label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-black border-[1px]"
              name="entry.213641340"
              type="email"
              id="field-email"
              placeholder="info@example.com"
              required
            />
          </div>

          <div className="pb-6">
            <label htmlFor="field-tel">電話番号</label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-black border-[1px]"
              name="entry.1399266169"
              type="tel"
              id="field-tel"
              placeholder="000-0000-0000"
            />
          </div>

          <div className="pb-12">
            <label htmlFor="field-message">お問い合わせ内容
              <span className="ml-2 text-[10px] bg-slate-950 text-white px-[8px] py-[4px] rounded-sm">必須</span>
            </label>
            <Textarea
              className="mt-2 h-[56px] rounded-[8px] border-black border-[1px]"
              name="entry.1450192857"
              id="field-message"
              placeholder="お問い合わせ内容"
              required
            />
          </div>

          <div className="flex justify-center">
            <Button className="sm:w-1/4 w-full" type="submit">送信する</Button>
          </div>
        </div>
      </form>
      
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
    </div>
  );
};

export default ContactPage;
