'use client'
import { useEffect, useState } from 'react';

const QuestionBox = ({ number = "", question = "", answer = "" }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const section = document.querySelector('#questionBox');
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
const [showAnswer, setAnswer] = useState(false)

  return (
    <>
    <div style={{transitionDelay:'0.3s',}} id='questionBox' className={`fade-in-section ${isActive ? 'active' : ''} faq-card`} onClick={()=>{
        setAnswer(!showAnswer)
    }}>
      <h2>{number}</h2>
      <h1>{question}</h1>
      <span>
        <img className={`${showAnswer? 'rotate-45' : ''}`} src="/plus.svg" />
      </span>
    </div>
    {showAnswer &&
    <div className="faq-answer">
        <p>{answer}</p>
    </div>
    }
    </>
  );
};

export default QuestionBox;
