'use client'
import { useEffect, useState } from 'react';

const Growth = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#growthSec');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsActive(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section id='growthSec' className={`fade-in-section ${isActive ? 'active' : ''} container`} style={{transitionDelay:'0.3s',}}>
        <div className="text-center">
          <h1 className="sec-title text-[70px]  font-bold  lg:mb-[120px] md:mb-[100px] mb-[60px]">
            Use CupidAI For Exponential Growth
          </h1>
        </div>
        <div className="flex items-center md:flex-row lg:flex-row flex-col lg:gap-2 md:gap-2 gap-4 rounded-3xl lg:p-20 md:p-20 p-10 growth-box">
          <div className="block lg:w-3/5 md:w-3/5 w-full">
            <h1 className="sec-title text-[70px]  font-bold ">
              Grow Beyond Basic
            </h1>

            <p className="sec-parah mt-2  lg:border-b md:lg:border-b lg:pb-10 md:pb-10 border-[#182542]">
              Grow your Content Creation with hyper-realistic AI tool that will
              help you manage and make wonderful contents in platforms. Up rise
              profit and gain more audience as you embark into this AI Journey.
            </p>
          </div>
          <div className="lg:w-2/5 md:w-2/5 w-full">
            <img className="w-full rounded-[40px]" src="/growth-img.svg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Growth;
