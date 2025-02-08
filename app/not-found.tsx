import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const notfound = () => {
    return (
        <div className="sm:w-[70%] w-[90%] m-auto py-24">
            <h1 className='text-center text-9xl'>404</h1>
            <h2 className='text-center text-4xl'>Page not found.</h2>
            <p className='text-center text-lg pt-10'>申し訳ございません。<br />お探しのページは見つかりませんでした。</p>

            <div className="flex justify-center pt-10">
                <Button asChild>
                    <Link className="sm:w-1/4 w-full" href="/">ホームへ戻る</Link>
                </Button>

            </div>
        </div>
    )
}

export default notfound