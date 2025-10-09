"use client";

interface Props {
  item: {
    title: string,
    description: string
  }
}

const StatsCard: React.FC<Props> = ({ item }) => {
  return (
    <div data-aos="zoom-out-up" className="flex flex-col items-center xl:items-start">
      <h2 className="stats-card-title text-[54px] font-bold w-fit">{item.title}</h2>
      <p className="text-paragraph font-[26px] ">{item.description}</p>
    </div>
  )
}

export default StatsCard