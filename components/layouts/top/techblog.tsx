import React from 'react'
import Workcard from '../workcard'

const techblog = () => {
  return (
    <div className='sm:w-[70%] w-[90%] m-auto'>
            <h3>Tech Blog</h3>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-16'>
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