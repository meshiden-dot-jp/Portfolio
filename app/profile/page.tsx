"use client";
import Image from 'next/image';
import React from 'react'
import Biography from '@/components/layouts/profile/biography';
import Award from '@/components/layouts/profile/award';

const page = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto sm:flex min-h-screen'>
      <div className='sm:w-1/3 relative'>
        <div className='sm:sticky top-20 sm:pb-32 '>
          <h1>Profile</h1>
          <Image
            className='rounded-[24px]'
            src='https://res.cloudinary.com/dxsccj7j7/image/upload/v1739324050/icon.png'
            width='900'
            height='900'
            alt=''
          />
        </div>
      </div>
      <div className='sm:pl-16 sm:pt-64 pb-24'>
        <div className='pt-8'>
          <p className='text-4xl font-[din-2014] font-bold'>
            Frontend Engineer <br />
            UI Designer
          </p>
          <p className='text-9xl pb-8 font-[din-2014] font-bold'>iIDa</p>
          <p className='text-2xl font-bold leading-[56px]'>
            はじめまして。<br />
            UIデザインとフロントエンドエンジニアをしています。<br />
            <span className='text-[#D356FD] bg-[#f8e4ff] px-3 rounded-[8px] font-[din-2014] font-bold text-4xl mr-2'>&quot;Accessibility for All.&quot;</span>を目標に、<br />
            誰でも使いやすい設計を目指しています。
          </p>
        </div>
        <h2>SNS</h2>
        <ul className='text-[28px] flex sm:gap-x-10 gap-x-5 justify-center'>
          <li><a href="https://www.x.com/meshiden_jp"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/meshiden.jp"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://discord.com/users/1287985017615679513"><i className="fa-brands fa-discord"></i></a></li>
          <li><a href="https://www.youtube.com/@meshiden_jp"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://www.github.com/meshiden-dot-jp"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.behance.net/meganenasi61c5"><i className="fa-brands fa-behance"></i></a></li>
        </ul>

        <h2>Biography</h2>
        <Biography />

        <h2>Award</h2>
        <Award />
      </div>
    </div>
  )
}

export default page