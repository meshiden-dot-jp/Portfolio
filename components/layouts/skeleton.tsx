import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const skeleton = () => {
  return (
    <div>
       <Skeleton className="h-[900px] w-[900px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[900px]" />
          </div>
    </div>
  )
}

export default skeleton