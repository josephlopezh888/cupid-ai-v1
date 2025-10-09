import React from 'react'
import Link from 'next/link'
import "~/styles/globals.css"

function signup() {
    return (
        <div className='flex gap-4 mr-[100px]'>
            <Link href={'/dashboard'}>
                <div className="h-[50px] btn2 w-[160px] rounded-btn border gap-3 border-btn1 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
    <path d="M18 5h-8a2 2 0 0 0-2 2v11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2Zm-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 9a3 3 0 1 1 0-5.999A3 3 0 0 1 14 17Z"/>
    <path d="M6 9H2V2h16v1c.65.005 1.289.17 1.86.48A.971.971 0 0 0 20 3V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4V9Z"/>
  </svg>
                <h1 className="font-normal text-white">Dashboard</h1>
                </div>
            </Link>
           
        </div>
    )
}

export default signup