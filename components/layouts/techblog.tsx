import React from 'react'
import Workcard from './workcard'

const techblog = () => {
  return (
    <div className='w-[70%] m-auto'>
            <h1 className='text-6xl pt-24 pb-12'>Tech Blog</h1>
            <div className='grid grid-cols-3 gap-6'>
                <Workcard />
                <Workcard />
                <Workcard />
                <Workcard />
                <Workcard />
                <Workcard />
            </div>

        </div>
  )
}

export default techblog