"use client";

import Image from "next/image";
import Button from "~/app/_components/index/Button";
import { Nunito } from 'next/font/google'
import { PiStarFill, PiStarHalfFill } from "react-icons/pi"

const nunito = Nunito({ subsets: ['latin'] })



const Testimonial = () => {
  return (
    <div className="mt-44 h-[1004px] bg-testimonial bg-cover bg-no-repeat bg-center">
      <div className="xl:container mx-auto px-4 lg:px-8 h-full">
        <div className="flex h-full items-center justify-center flex-col gap-8">
          <div className={`flex flex-col gap-6 items-center justify-center ${nunito.className}`}>
            <Button type="button" variant="filled">Testimonial</Button>
            <h2 className={`text-[30px] lg:text-[50px] shrink-0 font-extrabold text-white text-center`} data-aos="zoom-in">Trusted by millions of creators.</h2>
            <p className={`text-[100px] font-extrabold text-white -mb-24`}>“</p>
            <p className={`text-white italic font-semibold text-2xl text-center max-w-[1049px]`} data-aos="zoom-in">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage .
            </p>
            <div className="flex flex-col gap-1.5 items-center justify-center" data-aos="zoom-in-up">
              <Image src="/image/logo.svg" alt="logo" width={108} height={108} />
              <div className="text-center">
                <h3 className={`text-[35px] font-bold text-white`}>CSTCryst</h3>
                <p className={`text-xl text-white font-semibold`}>Developer</p>
              </div>
              <div className="flex">
                <PiStarFill className="text-[28px] text-[#FFB422]" />
                <PiStarFill className="text-[28px] text-[#FFB422]" />
                <PiStarFill className="text-[28px] text-[#FFB422]" />
                <PiStarFill className="text-[28px] text-[#FFB422]" />
                <PiStarHalfFill className="text-[28px] text-[#FFB422]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial