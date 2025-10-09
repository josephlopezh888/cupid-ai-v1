'use client'

import { useEffect, useState } from 'react';


const trusted = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#trustedSec');
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
     <section className="container"  >
      <div id="trustedSec" className= {`fade-in-section ${isActive ? 'active' : ''} flex md:flex-row lg:flex-row flex-col-reverse  items-center lg:gap-10 md:gap-10 gap-10 rounded-3xl lg:p-10 md:p-[30px] p-10 px-[15px] trusted-box`}>
        <div className="block lg:w-3/5 md:w-3/5 w-full">
        <h1 className="sec-title text-[70px]  font-bold "

>Trusted And Reviewed.</h1>

<p className="sec-parah mt-2 mb-4">
This is a unique and bespoke service with responsive support. I have been very satisfied with the products and service. Recommended!
</p>
<div className="flex gap-5 items-center border-t pt-10 lg:mt-20 md:mt-20 mt-10 border-[#182542]">
<img className=" lg:w-[65px] lg:h-[65px] md:w-[65px] md:h-[65px] w-[50px] h-[50px]" src="/trusted-mark.png" />
<span className="flex flex-col gap-1">
<h3 className="text-white lg:text-[26px] md:text-[24px] text-[20px] uppercase" style={{letterSpacing:'10%'}}>Crispy beef</h3>
<p className="text-[#77798F] text-[12px] md:text-[14px] lg:text-[14px] ">Entrepreneur User Plan</p>
</span>
</div>

 
        </div>
        <div className="lg:w-2/5 md:w-2/5 w-full">
          <img className="w-full lg:max-w-[100%] md:max-w-[100%] max-w-[300px] mx-auto" src="/trusted-img.svg"/>
        </div>
      </div>
     </section>
    )
  }
  
  export default trusted