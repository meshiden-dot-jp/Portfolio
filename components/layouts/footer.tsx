import React from 'react'

const footer = () => {
  return (
    <div>
        <div className='h-auto pb-6 w-[90%] flex justify-between m-auto'>
            <div className='flex'>
                <h1 className='text-4xl leading-[48px] pr-4'>iIDa</h1>
                <h2>
                    Frontend Engineer <br />
                    UI Designer
                </h2>
            </div>

            <ul className='grid grid-cols-1 gap-3'>
                <li>Work</li>
                <li>Profile</li>
                <li>News</li>
                <li>Tech Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default footer