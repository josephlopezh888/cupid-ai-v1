"use client";

import { Nunito } from 'next/font/google'
import Image from 'next/image';

const nunito = Nunito({ subsets: ['latin'] })

import React from 'react'

const Mission = () => {
  return (
    <div className={`mt-44 grid lg:grid-cols-2 gap-6 ${nunito.className}`}>
      <div className="flex flex-col gap-7">
        <h2 className={`text-[30px] lg:text-[50px] shrink-0 font-extrabold text-white`} data-aos="zoom-out-right">Our Mission</h2>
        <div className={`text-paragraph text-[22px] flex flex-col gap-8`} >
          <p data-aos="zoom-in">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
          <p data-aos="zoom-in">Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>
        </div>
      </div>
      <div className='relative bg-[#C4C4C4] rounded-[60px] overflow-hidden w-full sm:aspect-square h-96 mx-auto lg:mx-0' data-aos="flip-up">
        <Image src="/image/mission.png" alt='Mission' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Mission