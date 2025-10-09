"use client";

import Image from 'next/image';
import React from 'react'

const Union = () => {
  return (
    <>
      <div className="absolute -top-[220px] -left-[93px] -z-[-1]">
        <div className="relative w-[863px] h-[863px]">
          <Image src="/image/union.png" alt='union' fill className="" />
        </div>
      </div>
      <div className="absolute bottom-[-200px] right-0 -z-[0] rotate-180">
        <div className="relative w-[863px] h-[863px]">
          <Image src="/image/union.png" alt='union' fill className="" />
        </div>
      </div>
    </>
  )
}

export default Union