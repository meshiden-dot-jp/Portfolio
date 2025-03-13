import React from 'react'
import Icons from './icons'

const footer = () => {
    return (
        <div className='border-t-[1px] pt-6 no-print'>
            <div className='h-auto pb-6 w-[90%] sm:flex sm:justify-between m-auto'>
                <div>
                    {/* <a className='flex' href="/">
                        <p className='text-4xl leading-[48px] pr-4 font-[din-2014] font-bold'>iIDa</p>
                        <p className='font-[din-2014] font-bold'>
                            Frontend Engineer <br />
                            UI Designer
                        </p>
                    </a> */}
                    <Icons />
                </div>

                <ul className='grid grid-cols-1 sm:gap-3 gap-2 sm:pt-0 pt-8 sm:text-right font-[Noto Sans JP] font-bold text-sm'>
                    <li><a href="/work">作品一覧</a></li>
                    <li><a href="/profile">プロフィール</a></li>
                    <li><a href="/news">お知らせ</a></li>
                    <li><a href="/blog">技術ブログ</a></li>
                    <li><a href="/contact">お問い合わせ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer