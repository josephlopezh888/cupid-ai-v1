"use client";

import Image from 'next/image';
import React from 'react'

interface Props {
  item: {
    title: string,
    description: string,
    image: string
  }
}


const ValueCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="px-4 py-6 lg:py-[52px] lg:px-[51px] flex flex-col sm:flex-row lg:flex-col gap-9 rounded-xl lg:rounded-40 border border-[#F6F6F6] bg-black shadow-values" data-aos="zoom-in">
      <Image src={item.image} alt="patients" width={116} height={116} />
      <div className="flex flex-col gap-5">
        <h3 className="text-[30px] font-bold text-white line-clamp-1">{item.title}</h3>
        <p className="text-[#797979] text-[22px] line-clamp-5">{item.description}</p>
      </div>
    </div>
  )
}

export default ValueCard