import React from 'react'
import Link from 'next/link'
import "~/styles/globals.css"

function signup() {
    return (
        <div className='flex gap-4 mr-[100px]'>
            <Link href={'/auth/signin'}>
                <div className="h-[50px] btn2 w-[140px] rounded-btn border border-btn1 flex items-center justify-center">
                <h1 className="font-normal text-white">Sign In</h1>
                </div>
            </Link>
            <Link href={'/auth/signup'}>
                <div className="h-[50px] w-[140px] rounded-btn bg-gradient-to-r from-violet1 to-pink1 p-[1px]">
                    <div className="flex rounded-btn h-full w-full items-center justify-center bg-black">
                        <h1 className="font-normal text-white">Sign Up</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default signup