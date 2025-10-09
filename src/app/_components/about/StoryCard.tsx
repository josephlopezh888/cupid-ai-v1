"use client";

import Image from 'next/image';

interface Props {
  item: {
    title: string,
    description: string,
    image: string
  }
}

const StoryCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="md:py-10 py-6 px-4 md:px-7 flex flex-col md:flex-row gap-10 items-start xl:items-center" data-aos="zoom-in-up">
      <Image src={item.image} alt='Innovation' width={129} height={160} />
      <div className="flex flex-col gap-2.5">
        <h4 className={`text-[30px] text-white font-bold`}>{item.title}</h4>
        <p className="text-paragraph text-[22px]">{item.description}</p>
      </div>
    </div>
  )
}

export default StoryCard