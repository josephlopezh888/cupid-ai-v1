import Image from 'next/image'
import Pricing from '~/app/_components/home/PricingNtxt'
import Faq from '~/app/_components/home/Faq'
import MediaContent from '~/app/_components/home/MediaContent'
import Header from '~/app/_components/index/Header'
import Footer from '~/app/_components/index/Footer'


export default function About() {
    return (
        <>
            <div className='relative overflow-x-hidden'>
                <Header />
                <div className='pt-[180px] w-[100%]'>
                <div>
                    <h1 className='mt-16 text-center text-6xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Pricing Plans</h1>
                    <div className='mt-2 mx-auto text-center w-108 text-gray-300 text-xl mb-[100px]'>
                        Revolutionizing media entertainment with AI, our skilled engineers design immersive, quality experiences catering to diverse client fantasies.
                    </div>

                    <Pricing />

                    <div className='w-[1180px] h-[1629px] border mx-auto bg-[#010314] rounded-[60px] mt-[200px] bg-pricing'>
                        <h1 className='mt-[40px] text-center text-5xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Compare Pricing Packages</h1>
                        <div className="flex w-[1100px] mx-auto border-b-2 mt-[60px] justify-evenly items-center">
                            <h1 className='mt-[40px] w-[300px] text-center text-4xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Features</h1>
                            <h1 className='mt-[40px] w-[300px] text-center text-4xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Individual<br></br><span className='text-[18px] font-normal'>$7.99/month</span></h1>
                            <h1 className='mt-[40px] w-[300px] text-center text-4xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Entrepreneur<br></br><span className='text-[18px] font-normal'>$7.99/month</span></h1>
                            <h1 className='mt-[40px] w-[300px] text-center text-4xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Business<br></br><span className='text-[18px] font-normal'>$7.99/month</span></h1>
                        </div>

                        <h1 className='text-[18px] text-[#b174fb] my-[40px] font-semibold ml-[100px]'>Analytics</h1>
                        <ul className=''>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <h1 className='text-[18px] text-[#b174fb] my-[40px] font-semibold ml-[100px]'>Analytics</h1>
                        <ul className=''>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <h1 className='text-[18px] text-[#b174fb] my-[40px] font-semibold ml-[100px]'>Analytics</h1>
                        <ul className=''>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-[1100px] text-center mx-auto border rounded-[20px] h-[95px] justify-center items-center">
                                    <h1 className='text-[18px]  font-bold w-[300px]'>Realtime Analytics</h1>
                                    <div className='w-[300px]'>
                                        <Image src={'/Close.svg'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                    <div className='w-[300px]'>
                                        <Image src={'/Tick.png'} alt='check' width={28} height={28} className='mx-auto'></Image>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-[200px] relative'>
                        <Faq />
                    </div>
                    <div className='mt-[200px] relative'>
                        <MediaContent />
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}