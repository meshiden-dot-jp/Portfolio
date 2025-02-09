import React from 'react'
import Image from "next/image";
import Biography from '@/components/layouts/profile/biography';
import Award from '@/components/layouts/profile/award';

const page = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto sm:flex'>
      <div className='sm:w-1/2 relative'>
        <div className='sm:sticky top-20 sm:pb-32 '>
          <h3>Profile</h3>
          <Image src="https://placehold.jp/900x900.png" alt="サンプル画像"  width={900} height={900}  />
        </div>
      </div>
      <div className='sm:w-1/2 sm:pl-16 sm:pt-80 pb-24'>
        <div className='pt-8'>
          <h2 className='text-4xl'>
            Frontend Engineer <br />
            UI Designer
          </h2>
          <h1 className='text-9xl pt-2 pb-16'>iIDa</h1>
          <p>
            クリエイターをマネジメントする事務所やWEB制作会社などを経て、2015年にイラストレーターとして独立。シンプルな線と目を引く色づかいを特徴として、広告キャンペーン、書籍の表紙、商品パッケージなどの「デザインにフィットする」イラストを描く。プライベートでは3歳の息子を育てる。
          </p>
        </div>
        <h4>SNS</h4>
        <ul className='text-[28px] flex sm:gap-x-10 gap-x-5 justify-center'>
          <li><a href="https://www.x.com/meshiden_jp"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/meshiden.jp"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://discord.com/users/1287985017615679513"><i className="fa-brands fa-discord"></i></a></li>
          <li><a href="https://www.youtube.com/@meshiden_jp"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://www.github.com/meshiden-dot-jp"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.behance.net/meganenasi61c5"><i className="fa-brands fa-behance"></i></a></li>
        </ul>

        <h4>Biography</h4>
        <Biography/>
        
        <h4>Award</h4>
        <Award />
      </div>
    </div>
  )
}

export default page