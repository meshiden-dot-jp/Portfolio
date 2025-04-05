"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner"
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator"


const ContactPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("toastSuccess")) {
      toast.success("送信が完了しました。");
      sessionStorage.removeItem("toastSuccess"); // 1回表示したら削除
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error("reCAPTCHA not loaded");
      toast.error("reCAPTCHAの読み込みに失敗しました。");
      return;
    }

    try {
      // 1秒遅延させて Google フォームに送信
      setTimeout(() => {
        const form = document.getElementById("contact-form") as HTMLFormElement;
        if (form) {
          form.submit();
        }

        sessionStorage.setItem("toastSuccess", "true");

        setTimeout(() => {
          window.location.reload()
        }, 1500);

      }, 1000);
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      toast.error("エラーが発生しました。再試行してください。");
    }
  };

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-12 bg-white">
      <h1>お問い合わせ</h1>
      <p className="pb-8">
        本ページおよびサイト運営者に関するお問い合わせは、以下のフォームにご記入ください。
        このフォームに入力された個人情報は、お問い合わせ内容の回答のみに使用されます。
      </p>
      <Separator />
      <p className="nes text-sm pt-4 pb-12">*必須の質問です。</p>

      <form
        id="contact-form"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjov6LEg5wA6uvZRpzURut9OZFU0Q8ZGM9LXwl2zorSaXag/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="c-form"
      >
        <div className="pb-4">
          <div className="pb-6">
            <label htmlFor="field-name">氏名・組織名
              <span className="nes">*</span>
            </label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-[1px]"
              name="entry.1130227589"
              type="text"
              id="field-name"
              placeholder="山田太郎"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="pb-6">
            <label htmlFor="field-email">メールアドレス
              <span className="nes">*</span>
            </label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-[1px]"
              name="entry.213641340"
              type="email"
              id="field-email"
              placeholder="info@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="pb-6">
            <label htmlFor="field-tel">電話番号（任意）</label>
            <Input
              className="mt-2 h-[56px] rounded-[8px] border-[1px]"
              name="entry.1399266169"
              type="tel"
              id="field-tel"
              placeholder="000-0000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="pb-12">
            <label htmlFor="field-message">お問い合わせ内容
              <span className="nes">*</span>
            </label>
            <Textarea
              field-sizing-content="true"
              className="mt-2 h-[56px] rounded-[8px] border-[1px]"
              name="entry.1450192857"
              id="field-message"
              placeholder="お問い合わせ内容"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button className="sm:w-1/4 w-full" type="submit">送信する</Button>
          </div>
          <div className="grid justify-center text-[11px]">
            <p className="flex gap-[2px] pt-12 leading-5b before:content-['※']">
              <span>このフォームでパスワードを送信しないでください。</span>
            </p>
            <p className="flex gap-[2px] pt-2 leading-5 before:content-['※']"><span>このフォームはreCAPTCHAによって保護されており、 Googleの
              <a className="b" href="https://www.google.com/intl/ja/policies/privacy/">プライバシーポリシー</a>と
              <a className="b" href="https://www.google.com/intl/ja/policies/terms/">利用規約</a>が適用されます。</span>
            </p>
            <p className="flex gap-[2px] pt-2 leading-5 before:content-['※']"><span>送信することで、 当サイトの
              <a className="b" href="/privacy">プライバシーポリシー</a>と
              <a className="b" href="/disclaimer">免責事項</a>に同意したことになります。</span>
            </p>
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
