import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
        <div className='sticky top-0 w-full border-b-[1px] bg-white z-10'>
            <div className='h-16 w-[90%] m-auto flex justify-between items-center'>
                <a className='flex' href="/">
                    <h1 className='text-4xl leading-[48px] pr-4'>iIDa</h1>
                    <h2>
                        Frontend Engineer <br />
                        UI Designer
                    </h2>
                </a>

                <div className='sm:hidden flex'>
                    <Sheet>
                        <SheetTrigger><i className="fa-solid fa-bars"></i></SheetTrigger>
                        <SheetContent className='w-screen'>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                    <ul className='text-3xl text-black grid grid-cols-1 gap-8 pt-16 text-center font-[din-2014] font-bold'>
                                        <li><a href="/work">Work</a></li>
                                        <li><a href="/profile">Profile</a></li>
                                        <li><a href="/news">News</a></li>
                                        <li><a href="/blog">Tech Blog</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <ul className='gap-6 font-[din-2014] font-bold sm:flex hidden '>
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