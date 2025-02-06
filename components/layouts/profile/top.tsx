import React from 'react'

const top = () => {
  return (
    <div className='w-[70%] m-auto'>
      <h3>Profile</h3>
      <div className='flex items-end'>
        <img className='w-6/12' src="https://placehold.jp/900x900.png" alt="イメージ画像" />
        <div className='pl-16'>
          <h2 className='text-4xl'>
            Frontend Engineer <br />
            UI Designer
          </h2>
          <h1 className='text-9xl pt-2'>iIDa</h1>
        </div>
      </div>

    </div>
  )
}

export default top