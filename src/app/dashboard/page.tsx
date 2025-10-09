"use client"
import Image from 'next/image'
import Header from '~/app/_components/dashboard/header'
import Sidebar from '~/app/_components/dashboard/sidebar'
import GeneratedContents from '~/app/_components/dashboard/home/generatedContents'


import OverviewChart from '~/app/_components/dashboard/home/overviewChart'
import News from '~/app/_components/dashboard/home/news'
import Refereals from '~/app/_components/dashboard/home/refereals'
import Leaderboard from '~/app/_components/dashboard/home/leaderboard'

const page = () => {
  return (
    <>
    <div className='container-dashboard max-h-[calc(100vh-80px)] max-w-[calc(100vw-260px)] absolute w-full h-full ml-[260px] mt-[80px] overflow-x-hidden overflow-y-auto scrollbar-hide '>
    <div className="flex lg:flex-row md:flex-row flex-col gap-5 w-full py-10 px-[20px] dash-all-holder">
        <div className="flex flex-col gap-5 lg:w-1/1 md:w-1/1 w-full">
        <GeneratedContents/>
        <OverviewChart/>
        <News/>
        </div>


        <div className="flex flex-col gap-5 lg:w-1/2 md:w-1/2 w-full dashboard-right">
    <Refereals/>
    <Leaderboard/>
        </div>
     
    </div>
</div>
<Header title='Home'></Header>
<Sidebar Selected='Home'></Sidebar>

</>
  )
}

export default page