import React from 'react'
import { Separator } from "@/components/ui/separator"

const lowernav = () => {
  return (
    <div className='flex justify-center text-xs pb-6'>
        <ul className='flex gap-5'>
            <li>利用規約</li>
            <Separator orientation="vertical"/>
            <li>免責事項</li>
            <Separator orientation="vertical"/>
            <li>プライバシーポリシー</li>
            <Separator orientation="vertical"/>
            <li>クッキーポリシー</li>
            <Separator orientation="vertical"/>
            <li>ウェブアクセシビリティ</li>
        </ul>
    </div>
  )
}

export default lowernav