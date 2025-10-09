'use client'
import Image from "next/image"
import Link from "next/link"
import secTitle from "./secTitle"


import { useEffect, useState } from 'react';

const HomeBanner = ()=>{
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#bannerimg');
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
    return(
    
      <section className="container" >
        <div className='banner-sec lg:pt-20 md:pt-20 pt-10 lg:pb-[300px] md:pb-[250px] pb-[200px] rounded-3xl' style={{background: 'radial-gradient(217.23% 100.08% at 50% 18.33%, rgba(14, 14, 14, 0.00) 27.80%, #7F04E3 69.34%, #FF006B 100%)'}}>
        <h2 className="text-[16px] text-center uppercase flex items-center justify-center gap-3 welcome-text" >
  <img src="/welcome-star.svg" /> Welcome to CupidAI
</h2>
<div className="text-center">
<h1 className="text-[50px] font-bold mt-3"
style={{
  letterSpacing: '6.4px',
  backgroundImage: 'radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  lineHeight:'1.2em',
  WebkitTextFillColor: 'transparent'
}}
>AI REVOLUTION IN MEDIA ENTERTAINMENT</h1>


<p className="max-w-[500px] w-full mx-auto mt-4   text-[#77798F] text-[18px] font-[400]">Revolutionizing media entertainment with AI, our skilled engineers design immersive, quality experiences catering to diverse client fantasies.</p>
 
  </div>    
      <div className="flex items-center justify-center mt-6 gap-5">
        <button className="gredient-btn py-2 ld:py-3  px-5 md:py-10 text-white font-medium rounded-full  border-[#2A2B3A]">Get started</button>
        <button className="py-3 px-10 bg-[#010314] text-white font-medium rounded-full border-2 border-[#2A2B3A] flex items-center gap-4"><img src="/play-icon.svg" /> Watch Video</button>

      </div>
      
        </div>

        <img id="bannerimg"  className={`fade-in-section ${isActive ? 'active' : ''} w-full lg:mt-[-250px] md:mt[-200px] mt-[-150px]`} style={{position:'relative', zIndex:'9',}} src="/banner-img.svg" />
      </section>

    )
}


export default HomeBanner