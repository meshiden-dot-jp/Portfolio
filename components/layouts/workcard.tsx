import React from 'react'

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
            <Card>
                <CardHeader>
                    <img src="https://placehold.jp/900x900.png" alt="" />
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-xs'>yyyy/mm/dd</CardDescription>
                </CardContent>
                <CardFooter>
                    <CardTitle className='text-base'>あのイーハトーヴォの白く透き通った風</CardTitle>
                </CardFooter>
            </Card>

        </div>
    )
}

export default workcard