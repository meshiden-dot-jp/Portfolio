import React from 'react'
import { Separator } from "@/components/ui/separator"

const lowernav = () => {
  return (
    <div className='w-[90%] text-xs pb-6 m-auto'>
      <ul className="sm:flex sm:justify-center flex-wrap gap-3 sm:gap-5">
        <li><a href="/disclaimer">免責事項</a></li>
        <Separator orientation="vertical" />
        <li><a href="/privacypolicy">プライバシーポリシー</a></li>
        <Separator orientation="vertical" />
        <li><a href="/accessibility">ウェブアクセシビリティ</a></li>
      </ul>
    </div>
  )
}

export default lowernav