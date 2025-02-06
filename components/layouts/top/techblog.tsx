import React from 'react'
import Workcard from '../workcard'

const techblog = () => {
  return (
    <div className='w-[70%] m-auto'>
            <h3>Tech Blog</h3>
            <div className='grid grid-cols-3 gap-16'>
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