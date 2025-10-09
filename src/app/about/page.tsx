
import { Nunito } from 'next/font/google'
import Stats from '~/app/_components/about/Stats'
import Mission from '~/app/_components/about/Mission'
import Story from '~/app/_components/about/Story'
import Testimonial from '~/app/_components/about/Testimonial'
import Button from '~/app/_components/index/Button'
import ValueCard from '~/app/_components/about/ValueCard'
import { valuesCardData } from './constants'
import Union from '~/app/_components/about/Union'
import Header from '~/app/_components/index/Header'
import Footer from '~/app/_components/index/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div className='relative overflow-x-hidden'>
        <Header />
        <div className='pt-[180px] w-[100%]'>
    <main className="relative overflow-hidden lg:overflow-visible ">
      <Union />
      <div className="xl:container mx-auto px-4 lg:px-8">
        <h1 className="text-[48px] lg:text-[76px] font-bold text-center mt-28 page-title" data-aos="fade-right">About our company</h1>
        <div className="mt-72 flex gap-9 flex-col md:flex-row">
          <div className="md:flex-1 h-[544px] bg-about-box rounded-[30px]"></div>
          <div className="md:flex-1 xl:aspect-square h-[544px] bg-about-box rounded-[30px]"></div>
        </div>
        <div className={`my-20 flex items-start gap-10 flex-col lg:flex-row xl:gap-48 ${nunito.className}`}>
          <h2 className={`text-[30px] lg:text-[50px] shrink-0 font-extrabold text-white`} data-aos="fade-up">What we do</h2>
          <div className={`text-paragraph text-[22px] flex flex-col gap-8`} data-aos="zoom-in-down">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <p>Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>
          </div>
        </div>
        <Stats />
        <Mission />
        <Story />
      </div>
      <Testimonial />
      <div className="xl:container mx-auto px-4 lg:px-8 pb-[300px]">
        <div className={`flex flex-col gap-6 py-[191px] items-center justify-center ${nunito.className}`}>
          <Button type="button" variant="primary" data-aos="fade-right">Values</Button>
          <h2 className={`text-[30px] lg:text-[50px] shrink-0 font-extrabold text-white text-center`} data-aos="zoom-out">Values that define us</h2>
          <div className="max-w-[1400px] mx-auto">
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {valuesCardData.map((item, index) => <ValueCard key={index} item={item} />)}
            </div>
          </div>
        </div>
        <div className={`flex lg:h-[324px] lg:rounded-40 overflow-hidden ${nunito.className}`} data-aos="fade-right">
          <div className="hidden w-[155px] lg:flex items-center justify-center bg-[#5236FF] font-extrabold text-[176px] text-white relative">
            <span className="absolute h-[176px]">“</span>
          </div>
          <div className="bg-black border border-white flex items-center flex-1 rounded-lg lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-40 lg:rounded-br-40 p-4 lg:p-14">
            <p className="text-[16px] md:text-[32px] text-white">
              There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage.
            </p>
          </div>
        </div>
      </div>
    </main>
    </div>
    <Footer/>
    </div>
    </>
  )
}
