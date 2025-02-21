"use client";
import Image from 'next/image';
import React from 'react'
import Biography from '@/components/layouts/profile/biography';
import Award from '@/components/layouts/profile/award';

const page = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto sm:flex min-h-screen'>
      <div className='sm:w-1/3 relative'>
        <div className='sm:sticky top-20 sm:pb-32 w-full'>
          <h1>Profile</h1>
          <Image
            className='m-auto w-full'
            src='https://placehold.jp/900x900.png'
            width='900'
            height='900'
            alt=''
          />
        </div>
      </div>
      <div className='sm:pl-16 sm:pt-64 pb-24 sm:w-2/3'>
        <div className='pt-8'>
          <p className='text-4xl font-[din-2014] font-bold'>
            Frontend Engineer <br />
            UI Designer
          </p>
          <p className='text-9xl pb-8 font-[din-2014] font-bold'>iIDa</p>
          <p className='lg:text-xl text-base font-bold lg:leading-8 leading-7 lg:text-left'>
            はじめまして。<br />
            UIデザインとフロントエンド構築をしています。<br />
            <span className='bg-black text-white px-3 font-[din-2014] font-bold mr-2'>&quot;Accessibility for All.&quot;</span>を目標に、<br />
            誰もが使いやすいUI設計を目指しています。
          </p>
        </div>
        <h2>Skills</h2>

        <h2>Biography</h2>
        <Biography />

        <h2>Award</h2>
        <Award />
      </div>
    </div>
  )
}

export default page