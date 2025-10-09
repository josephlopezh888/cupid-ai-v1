import Image from 'next/image'
import HomeBanner from './_components/home/banner'
import Trusted from './_components/home/trusted'
import Pricing from './_components/home/Pricing'
import Growth from './_components/home/Growth'
import Faq from './_components/home/Faq'
import MediaContent from './_components/home/MediaContent'
import Header from './_components/index/Header'
import Footer from './_components/index/Footer'

export default function Home() {

    return (
        <>
          <div className='relative z-50'>
            <Header />
            <div className='pt-[180px] w-[100%]'>
              <HomeBanner />
              <Trusted />
              <div className="lg:mt-40 md:mt-40 mt-20">
                <Pricing />
              </div>
              <div className="lg:mt-40 md:mt-40 mt-20">
                <Growth />
              </div>
              <div className="lg:mt-40 md:mt-40 mt-20">
                <Faq />
              </div>
              <div className="lg:mt-40 md:mt-40 mt-20">
                <MediaContent />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )
}
