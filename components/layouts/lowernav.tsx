import React from 'react'
import { Separator } from "@/components/ui/separator"

const lowernav = () => {
  return (
    <div>
      <div className='w-[90%] text-xs pb-6 m-auto'>
        <ul className="sm:flex sm:justify-center sm:flex-wrap sm:gap-5 grid gap-2 list-none">
          <li><a href="/disclaimer"><small>免責事項</small></a></li>
          <Separator orientation="vertical" />
          <li><a href="/privacypolicy"><small>プライバシーポリシー</small></a></li>
          <Separator orientation="vertical" />
          <li><a href="/accessibility"><small>ウェブアクセシビリティ</small></a></li>
        </ul>
      </div>
    </div>
  )
}

export default lowernav