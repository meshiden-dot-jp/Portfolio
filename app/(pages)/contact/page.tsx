"use client"

import React, { useState, useEffect } from "react";
import Contact from "@/components/layouts/top/contact";

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
    <div className=" m-auto pb-12 min-h-screen">
      <Contact/>
    </div>
  );
};

export default ContactPage;
