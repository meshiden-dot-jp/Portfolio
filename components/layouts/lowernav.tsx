import React from 'react'
import { Separator } from "@/components/ui/separator"

const lowernav = () => {
  return (
    <div>
      <div className='w-[90%] text-xs pb-6 m-auto'>
        <ul className="sm:flex sm:justify-center sm:flex-wrap sm:gap-5 grid gap-2">
          <li><a href="/disclaimer">免責事項</a></li>
          <Separator orientation="vertical" />
          <li><a href="/privacypolicy">プライバシーポリシー</a></li>
          <Separator orientation="vertical" />
          <li><a href="/accessibility">ウェブアクセシビリティ</a></li>
        </ul>
      </div>
    </div>
  )
}

export default lowernav