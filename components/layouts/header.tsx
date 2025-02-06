import React from 'react'

const header = () => {
    return (
        <div className='h-16 w-[90%] m-auto flex justify-between items-center'>
            <a className='flex' href="/">
                <h1 className='text-4xl leading-[48px] pr-4'>iIDa</h1>
                <h2>
                    Frontend Engineer <br />
                    UI Designer
                </h2>
            </a>

            <ul className='flex gap-6'>
                <li><a href="/work">Work</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/blog">Tech Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default header