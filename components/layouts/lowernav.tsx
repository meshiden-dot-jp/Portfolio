import React from 'react'
import { Separator } from "@/components/ui/separator"

const lowernav = () => {
  return (
    <div className='no-print'>
      <div className='w-[90%] text-xs pb-6 m-auto'>
        <ul className="lg:flex lg:justify-center lg:flex-wrap lg:gap-5 grid gap-2">
          <li><a href="/disclaimer"><small>免責事項</small></a></li>
          <Separator orientation="vertical" />
          <li><a href="/privacy"><small>プライバシーポリシー</small></a></li>
          <Separator orientation="vertical" />
          <li><a href="/ai"><small>AIポリシー</small></a></li>
          <Separator orientation="vertical" />
          <li><a href="/accessibility"><small>ウェブアクセシビリティ</small></a></li>
        </ul>
      </div>
    </div>
  )
}

export default lowernav