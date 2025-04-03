import React from 'react'
import Icons from './icons'
import Lowernav from './lowernav'
import Copyright from './copyright'

const footer = () => {
    return (
        <div className='bg-[#f5f5f7] text-[#6c6c6c] py-12 no-print'>
            <div className='h-auto w-[90%]  m-auto'>
                <div className='sm:flex sm:flex-row-reverse justify-between sm:pb-16'>
                    <div className='flex justify-center pb-6'>
                        <Icons />
                    </div>
                    <ul className='flex flex-wrap justify-center gap-8 gap-y-0 pb-6'>
                        <Lowernav />
                    </ul>
                </div>
                <Copyright />
            </div>
        </div>
    )
}

export default footer