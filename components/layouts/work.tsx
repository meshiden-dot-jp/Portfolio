import React from 'react'
import Workcard from './workcard'

const work = () => {
    return (
        <div className='w-[70%] m-auto'>
            <h1 className='text-6xl pt-24 pb-12'>Work</h1>
            <div className='grid grid-cols-3 gap-6'>
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

export default work