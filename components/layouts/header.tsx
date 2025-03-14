"use client";

// import { useState, useEffect } from "react";
import React from 'react'
import Lowernav from './lowernav'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



const Header = () => {
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsVisible(true);
    //     }, 0);

    //     return () => clearTimeout(timer);
    // }, []);

    // if (!isVisible) return null;
    return (
        <div className='sticky top-0 w-full z-50 text-black bg-white/80 backdrop-saturate-[180%] backdrop-blur-xl no-print'>
            <div className='lg:h-14 h-12 w-[90%] m-auto flex justify-between items-center'>
                <a className='flex' href="/">
                    <p className='lg:text-3xl text-2xl leading-[48px] pr-4 font-[din-2014] font-bold'>iIDa</p>
                    {/* <p className='font-[din-2014] font-bold'>
                        Frontend Engineer <br />
                        UI Designer
                    </p> */}
                </a>

                <div className='lg:hidden flex'>
                    <Sheet>
                        <SheetTrigger><i className="fa-solid fa-bars"></i></SheetTrigger>
                        <SheetContent className='w-screen'>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                    <ul className='text-xl text-black font-bold grid grid-cols-1 gap-4 pl-8 text-left'>
                                        <li><a href="/work">作品一覧</a></li>
                                        <li><a href="/profile">自己紹介</a></li>
                                        <li><a href="/news">お知らせ</a></li>
                                        <li><a href="/blog">技術ブログ</a></li>
                                        <li><a href="/contact">お問い合わせ</a></li>
                                    </ul>
                                    <div className='text-left pt-16 pl-4'>
                                        <Lowernav />
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <ul className='gap-8 font-bold lg:flex hidden text-sm'>
                    <li><a href="/work">作品一覧</a></li>
                    <li><a href="/profile">自己紹介</a></li>
                    <li><a href="/news">お知らせ</a></li>
                    <li><a href="/blog">技術ブログ</a></li>
                    <li><a href="/contact">お問い合わせ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header