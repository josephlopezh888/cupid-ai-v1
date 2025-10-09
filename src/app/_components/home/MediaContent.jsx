'use client'
import { useEffect, useState } from 'react';
const MediaContent = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#mediaSec');
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
      <section style={{transitionDelay:'0.3s',}} id='mediaSec' className={`fade-in-section ${isActive ? 'active' : ''} container`}>
        <div className="media-content-box">
          <div className="text-center max-w-[800px] w-full mx-auto">
            <h1 className="sec-title lg:text-[54px] md:text-[50px] text-[30px] font-bold ">
              Maximize your Media Content Creation without extra hiring
            </h1>
            <p className="text-[#77798F] text-[16px] mt-2 mb-4 max-w-[600px] w-full mx-auto ">
              Spend timeless of minutes to get a fully realistic AI powered
              media creation tool that works 24/7 to help you engage and retain
              more users and boost entertainment.
            </p>
            <div className="flex gap-5 justify-center items-center">
              <button type="button">Get started</button>
              <button type="button"><img src="/play-icon.svg" alt="" /> Watch Video</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaContent;
