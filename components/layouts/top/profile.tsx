"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const profile = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
      <h1>Profile</h1>
      <div className='lg:flex items-center gap-16 bg-white rounded-[16px]'>
        <Image
          className='lg:w-1/3 lg:m-0 m-auto w-full'
          src='https://placehold.jp/900x900.png'
          width='900'
          height='900'
          alt=''
        />
        <div className='lg:pt-0 pt-4'>
          <p className='lg:text-2xl sm:text-xl text-base font-bold lg:leading-[56px] sm:leading-10 leading-7 sm:text-left'>
            はじめまして。<br />
            UIデザインとフロントエンド構築をしています。<br />
            <span className='bg-black text-white px-3 font-[din-2014] font-bold mr-2'>&quot;Accessibility for All.&quot;</span>を目標に、<br />
            誰もが使いやすいUI設計を目指しています。
          </p>
          <div className='flex justify-center lg:justify-end pt-8'>
            <a href="/profile">
              <Button variant="default" size={'lg'}>詳しく見る<i className="fa-solid fa-chevron-right"></i></Button>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default profile