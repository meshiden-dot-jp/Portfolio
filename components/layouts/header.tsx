import React from 'react'

const header = () => {
    return (
        <div className='h-16 w-[90%] m-auto flex justify-between items-center'>
            <div className='flex'>
                <h1 className='text-4xl leading-[48px] pr-4'>iIDa</h1>
                <h2>
                    Frontend Engineer <br />
                    UI Designer
                </h2>
            </div>

            <ul className='flex gap-6'>
                <li>Work</li>
                <li>Profile</li>
                <li>News</li>
                <li>Tech Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default header