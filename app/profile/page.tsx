"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'
import Biography from '@/components/layouts/profile/biography';
import Award from '@/components/layouts/profile/award';

const page = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto sm:flex'>
      <div className='sm:w-1/2 relative'>
        <div className='sm:sticky top-20 sm:pb-32 '>
          <h1>Profile</h1>
          <CldImage
            src="icon" // Use this sample image or upload your own via the Media Explorer
            width="900" // Transform the image: auto-crop to square aspect_ratio
            height="900"
            alt='頭が爆発したユニコーンのアイコン' 
            crop={{
              type: 'auto',
              source: true,
            }}
          />
        </div>
      </div>
      <div className='sm:w-1/2 sm:pl-16 sm:pt-80 pb-24'>
        <div className='pt-8'>
          <p className='text-4xl font-[din-2014] font-bold'>
            Frontend Engineer <br />
            UI Designer
          </p>
          <p className='text-9xl pb-8 font-[din-2014] font-bold'>iIDa</p>
          <p>
            クリエイターをマネジメントする事務所やWEB制作会社などを経て、2015年にイラストレーターとして独立。シンプルな線と目を引く色づかいを特徴として、広告キャンペーン、書籍の表紙、商品パッケージなどの「デザインにフィットする」イラストを描く。プライベートでは3歳の息子を育てる。
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