import React from 'react'
import Image from "next/image";

const profile = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
        <h3>Profile</h3>
        <Image src="https://placehold.jp/1600x900.png" alt="サンプル画像" />
    </div>
  )
}

export default profile