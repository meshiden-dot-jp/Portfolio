import React from 'react'

const footer = () => {
    return (
        <div className='border-t-[1px] pt-6'>
            <div className='h-auto pb-6 w-[90%] sm:flex sm:justify-between m-auto'>
                <a className='flex' href="/">
                    <h1 className='text-4xl leading-[48px] pr-4'>iIDa</h1>
                    <h2>
                        Frontend Engineer <br />
                        UI Designer
                    </h2>
                </a>

                <ul className='grid grid-cols-1 sm:gap-3 gap-2 sm:pt-0 pt-8 sm:text-right font-[din-2014] font-bold text-xl'>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/blog">Tech Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer