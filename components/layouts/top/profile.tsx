"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const profile = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
      <a href="/profile">
        <h1>Profile</h1>
      </a>
      <div className='sm:flex items-center gap-12 bg-white rounded-[16px]'>
        <Image
        className='sm:w-1/3 rounded-[64px]'
        src='https://res.cloudinary.com/dxsccj7j7/image/upload/v1739324050/icon.png'
        width='900'
        height='900'
        alt=''
        />
        <div>
          <p className='text-2xl font-bold leading-[56px] text-zinc-700'>
            はじめまして。<br />
            UIデザインとフロントエンドエンジニアをしています。<br />
            <span className='text-[#D356FD] bg-[#f8e4ff] px-3 rounded-[8px] font-[din-2014] font-bold text-4xl mr-2'>&quot;Accessibility for All.&quot;</span>を目標に、<br />
            誰でも使いやすい設計を目指しています。
          </p>
          <div className='flex justify-end'>
            <a href="/profile">
              <Button variant="ghost">詳しく見る<i className="fa-solid fa-chevron-right"></i></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile