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



const header = () => {
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
                                    <ul className='text-3xl text-black grid grid-cols-1 gap-4 pl-8 text-left font-[din-2014] font-bold'>
                                        <li><a href="/work">Work</a></li>
                                        <li><a href="/profile">Profile</a></li>
                                        <li><a href="/news">News</a></li>
                                        <li><a href="/blog">Tech Blog</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                    <div className='text-left pt-16 pl-4'>
                                        <Lowernav/>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <ul className='gap-6 font-[din-2014] font-semibold lg:flex hidden text-lg'>
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

export default header