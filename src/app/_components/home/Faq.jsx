'use client'
import { useEffect, useState } from 'react';
import QuestionBox from "./QuestionBox"

const Faq = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#faqSec');
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
    <section className={`fade-in-section ${isActive ? 'active' : ''} container`} id='faqSec'>
      <div className="text-center">
        <h1 className="sec-title text-[70px]  font-bold lg:mb-20 md:mb-20 mb-10">FAQ’s</h1>
      </div>

      <div className="faq-card-holder  ">
        <QuestionBox
        number='01'
        question='What is CupidAI?'
        answer="Lorem ipsum"
        />
        <QuestionBox
        number='02'
        question='Does it support all languages?'
        answer="Lorem ipsum"
        />
         <QuestionBox
        number='03'
        question='Do I need to know how to code to use CupidAI?'
        answer="Lorem ipsum"
        />
        <QuestionBox
        number='04'
        question='Will I be able to embed the chatbot into my website?'
        answer="Lorem ipsum"
        />
          <QuestionBox
        number='05'
        question='Can multiple team members in my organization manage my prompts?'
        answer="Lorem ipsum"
        />
      
      </div>
    </section>
  );
};

export default Faq;
