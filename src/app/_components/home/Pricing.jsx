'use client'
import { useEffect, useState } from 'react';

import MonthlyPricing from "./MonthlyPricing";
import YearPricing from './YearPricing'


const Pricing = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#pricingSec');
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

    const [pricingMonth, setPricingMonth ] = useState(true)
    const [pricingYear, setPricingYear ] = useState(false)

  return (
    <section id='pricingSec' className={`fade-in-section ${isActive ? 'active' : ''} container`} style={{transitionDelay:'0.3s',}}>
      <div className="text-center">
        <h1 className="sec-title text-[70px]  font-bold ">
          Simple, transparent pricing.
        </h1>

        <p className="sec-parah mt-2 mb-4">No contracts. No surprise fees.</p>

       <div className="flex justify-center mx-auto bg-[#010314] w-fit rounded-[22px] lg:mt-20 md:mt-20 mt-10">
        <button onClick={()=>{
            setPricingMonth(true)
            setPricingYear(false)
        }} type="button" className={` ${pricingMonth? 'bg-[#5243C2] text-white' : " " }  rounded-[22px] min-w-[200px] py-3 text-center text-[#848199] text-[14px] font-semibold`}>MONTHLY</button>
        <button
        onClick={()=>{
            setPricingYear(true)
            setPricingMonth(false)
        }}
        type="button" className={` ${pricingYear? 'bg-[#5243C2]  text-white' : " " } rounded-[22px] min-w-[200px] py-3 text-center text-[#848199] text-[14px] font-semibold`}>YEARLY</button>
       </div>
      </div>
      <div className="pricing-card-holder lg:mt-30 md:mt-30 mt-20">
        {pricingMonth?  <MonthlyPricing /> :  <YearPricing />}
      </div>
    </section>
  );
};

export default Pricing;

