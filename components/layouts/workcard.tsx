import React from 'react'
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const workcard = () => {
    return (
        <div>
            <Card className='p-0 border-none shadow-none'>
                <CardHeader className='p-0'>
                    <Image src="https://placehold.jp/900x900.png" alt="" />
                </CardHeader>
                <CardContent className='p-0 pt-3'>
                    <CardDescription className='text-xs'>yyyy/mm/dd</CardDescription>
                </CardContent>
                <CardFooter className='p-0 pt-1'>
                    <CardTitle className='text-base font-medium'>あのイーハトーヴォの白く透き通った風</CardTitle>
                </CardFooter>
            </Card>

        </div>
    )
}

export default workcard