"use client"

import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
      <Link href="/">
    <div className='flex gap-2 items-center shrink-0 w-[180px] ml-[10px] lg:ml-[100px]'>
        <Image src={'/logo.png'} width={40} height={40} alt='logo'/>
        <h1 className='text-[30px] py-3 font-bold bg-gradient-to-r from-violet1 to-pink1 bg-clip-text text-transparent'>CUPID
          <span className='text-white'>AI
          </span></h1>
          </div>
      </Link>
  )
}

export default Logo