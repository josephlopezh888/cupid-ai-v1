'use client'
import Image from 'next/image'
import Header from '~/app/_components/dashboard/header'
import Sidebar from '~/app/_components/dashboard/sidebar'

export default function Deepfake() {
    return (
        <>
            <div className='max-h-[calc(100vh-80px)] max-w-[calc(100vw-260px)] absolute w-full h-full ml-[260px] mt-[80px] overflow-x-hidden overflow-y-auto scrollbar-hide'>
                <div className='flex w-full'>
                <div className='w-[635px] h-[635px] bg-gradient-to-b from-[#15182F] to-[#131520] rounded-[15px] mt-[50px] ml-[60px] flex justify-center flex-col items-center'>
                    <svg className="w-[100px] h-[100px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3F495F" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <h1 className='text-[24px] font-semibold text-[#566179]'>Source Image/Video</h1>
                </div>
                <div className='w-[635px] h-[635px] bg-gradient-to-b from-[#15182F] to-[#131520] rounded-[15px] mt-[50px] ml-[60px] flex justify-center flex-col items-center'>
                    <svg className="w-[100px] h-[100px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3F495F" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <h1 className='text-[24px] font-semibold text-[#566179]'>Output Image/Video</h1>
                </div>

                </div>
                <div className='flex w-full'>
                <div className='w-[635px] h-[50px] border border-[#737373] rounded-[10px] mt-[30px] ml-[60px] flex justify-center flex-col items-center cursor-pointer'>Select Source File</div>
                <div className='w-[635px] h-[50px] border border-[#737373] rounded-[10px] mt-[30px] ml-[60px] flex justify-center flex-col items-center cursor-pointer'>Select Output File</div>
                </div>
                <div className='w-[1330px] h-[50px] bg-[#664DFF] rounded-[10px] mt-[20px] ml-[60px] flex justify-center flex-col items-center cursor-pointer'>Generate</div>
            </div>
            <Header title='TTS'></Header>
            <Sidebar Selected='TTS'></Sidebar>

        </>
    )
}
