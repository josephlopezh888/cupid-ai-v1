import Image from 'next/image'
import Button from '~/app/_components/index/Button'
import Link from 'next/link'
import Header from '~/app/_components/index/Header'
import Footer from '~/app/_components/index/Footer'
import MediaContent from '~/app/_components/home/MediaContent'

export default function About() {
    return (
        <>
            <div className='relative'>
                <Header />
                <div className='pt-[180px] w-[100%]'>
                    <div>
                        <h1 className='mt-16 text-center text-6xl py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Features</h1>
                        <div className='mt-2 mx-auto text-center w-108 text-gray-300 text-xl mb-[100px]'>
                            Check out the features CupidAI can do for you, Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </div>
                    </div>

                    <Button type="button" variant="filled" data-aos="fade-right" className='mx-auto mt-[160px]'>Generation</Button>
                    <h1 className='mt-16 text-center text-5xl mx-auto w-[600px] py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Generate Hyper Realistic AI Images</h1>
                    <div className='w-[1323px] h-[800px] mx-auto flex justify-center items-center mt-[80px] gap-[47px] '>
                        <div className='w-[388px] h-[516px] rounded-[20px]  transition-all duration-300 hover:scale-[120%]'>
                            <Image src='/Icon1.png' alt='Image 1' width={387} height={245} />
                            <h1 className='text-center text-2xl font-bold'>Custom Servers</h1>
                            <p className='text-center text-[#797979] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#6F3CF6] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                        <div className='w-[453px] h-[658px] border rounded-[40px] bg-fcard transition-all duration-300 hover:scale-[110%]'>
                            <Image src='/Icon2.png' alt='Image 1' width={387} height={245} className='mt-[80px] mx-auto' />
                            <h1 className='text-center text-2xl font-bold'>Advance Image Generation</h1>
                            <p className='text-center text-[#ffffff] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#FFF] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                        <div className='w-[388px] h-[516px] rounded-[20px] transition-all duration-300 hover:scale-[120%]'>
                            <Image src='/Icon3.png' alt='Image 1' width={387} height={245} />
                            <h1 className='text-center mt-[10px] text-2xl font-bold'>Powerful Automation</h1>
                            <p className='text-center text-[#797979] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#6F3CF6] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                    </div>

                    <Button type="button" variant="primary" data-aos="fade-right" className='mx-auto mt-[160px]'>Integration</Button>
                    <h1 className='mt-16 text-center text-5xl mx-auto w-[600px] py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>20+ integrations</h1>
                    <div className='w-[1323px] h-[800px] mx-auto flex justify-center items-center mt-[80px] gap-[47px] '>
                        <div className='w-[388px] h-[516px] rounded-[20px]  transition-all duration-300 hover:scale-[120%]'>
                            <Image src='/Icon4.png' alt='Image 1' width={387} height={245} />
                            <h1 className='text-center text-2xl font-bold'>All-in-one platform</h1>
                            <p className='text-center text-[#797979] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#6F3CF6] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                        <div className='w-[453px] h-[658px] border rounded-[40px] bg-fcard transition-all duration-300 hover:scale-[110%]'>
                            <Image src='/Icon5.png' alt='Image 1' width={385} height={245} className='mt-[80px] mx-auto' />
                            <h1 className='text-center text-2xl font-bold'>Advanced charts</h1>
                            <p className='text-center text-[#ffffff] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#FFF] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                        <div className='w-[388px] h-[516px] rounded-[20px] transition-all duration-300 hover:scale-[120%]'>
                            <Image src='/Icon6.png' alt='Image 1' width={387} height={245} />
                            <h1 className='text-center mt-[10px] text-2xl font-bold'>Powerful Automation</h1>
                            <p className='text-center text-[#797979] mt-[10px] w-[300px] mx-auto'>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                            <Link href="/signin"><h1 className='text-[#6F3CF6] text-[18px] underline mt-[50px] text-center'>Learn More</h1></Link>
                        </div>
                    </div>

                    <div className="max-w-[1520px] h-[488px] relative bg-[#010314] rounded-[30px] border-t-[2px] border-b-[2px] border-[#7241FF] mx-auto mt-[200px]">
                        <Image src={'/Group 54.png'} alt={'Image'} width={475} height={357} className='absolute ml-[170px] mt-[7    0px]'></Image>
                        <h1 className='mt-[130px]  ml-[750px]  text-5xl w-[500px] py-3 font-bold bg-gradient-radial-to-bc from-white/50 to-white bg-clip-text text-transparent'>Use CupidAI For Exponential Growth</h1>
                        <div className='mt-2 ml-[750px] w-108 text-gray-300 text-xl'>
                            This is a unique and bespoke service with responsive support. I have been very satisfied with the products and service. Recommended!
                        </div>

                    </div>
                    <div className='mt-[300px]'>
                    <MediaContent/>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}