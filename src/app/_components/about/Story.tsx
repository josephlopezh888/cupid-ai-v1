"use client";

import { Nunito } from 'next/font/google'

import Button from "~/app/_components/index/Button";
import StoryCard from './StoryCard';
import { storyCardData } from '~/app/about/constants';

const nunito = Nunito({ subsets: ['latin'] })


const Story = () => {
  return (
    <div className={`mt-44 ${nunito.className}`}>
      <div className="flex flex-col gap-8 items-center">
        <Button type="button" data-aos="fade-right">
          Our values
        </Button>
        <h2 className={`text-[30px] lg:text-[50px] shrink-0 font-extrabold text-white text-center`} data-aos="zoom-out">The story and values behind <br /> our company</h2>
      </div>
      <div className="mt-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
          {storyCardData.map((item, index) => <StoryCard key={index} item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Story