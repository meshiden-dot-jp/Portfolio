"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const profile = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
      <h1>自己紹介</h1>
      <div className='lg:flex items-center gap-[5%] bg-white rounded-[16px]'>
        <Image
          className='lg:w-1/3 lg:m-0 m-auto w-full'
          src='/image/profile.JPG'
          width='900'
          height='900'
          alt=''
        />
        <div className='w-full lg:pt-0 pt-8'>
          <p>青山学院大学理工学部情報テクノロジー学科３年</p>
          <p className='text-4xl font-bold leading-[84px]'>飯田 優斗<span className='text-2xl pl-[5%]'>IIDA Yuto</span></p>
          <p className='sm:text-xl text-lg font-bold sm:leading-10 leading-9'>
            はじめまして。 UIデザインとフロントエンド構築をしています。 &quot;Accessibility for All.&quot; を目標に、 誰もが使いやすいUI設計を探求しています。
          </p>
        </div>

      </div>
      <div className='flex justify-end pt-8'>
        <a href="/profile">
          <Button variant="ghost">詳しく見る<i className="fa-solid fa-chevron-right"></i></Button>
        </a>
      </div>
    </div>
  )
}

export default profile