import React from 'react'
import Image from "next/image";

const profile = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
      <a href="/profile">
        <h1>Profile</h1>
      </a>
      <Image className='hidden sm:block' src="https://placehold.jp/1600x900.png" alt="サンプル画像" width={1600} height={900} />
      <Image className='block sm:hidden' src="https://placehold.jp/900x1600.png" alt="サンプル画像" width={900} height={1600} />
    </div>
  )
}

export default profile