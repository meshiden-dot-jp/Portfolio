"use client"; // クライアントコンポーネントとして明示

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
