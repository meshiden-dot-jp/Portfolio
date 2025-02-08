import React from 'react'
import Image from "next/image";

const news = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
        <h3>News</h3>
        <Image src="https://placehold.jp/1600x900.png" alt="サンプル画像" width={1600} height={900} />
    </div>
  )
}

export default news