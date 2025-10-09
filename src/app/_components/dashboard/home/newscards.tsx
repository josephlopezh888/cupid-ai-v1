import React from 'react'

const newscards = () => {
  return (
    <>
  
      <div className="flex items-center md:flex-row lg:flex-row flex-col lg:gap-2 md:gap-2 gap-4 rounded-3xl lg:p-5 md:p-5 p-3 growth-box">
        <div className="block lg:w-3/5 md:w-3/5 w-full">
          <h1 className="sec-title-small font-bold">
            Grow Beyond Basic
          </h1>

          <p className="sec-parah-small mt-2  lg:border-b md:lg:border-b lg:pb-10 md:pb-10 border-[#182542]">
            Grow your Content Creation with hyper-realistic AI tool that will
            help you manage and make wonderful contents in platforms. Up rise
            profit and gain more audience as you embark into this AI Journey.
          </p>
        </div>
        <div className="lg:w-2/5 md:w-2/5 w-full">
          <img className="w-[200px] lg:ml-auto md:ml-auto mx-auto rounded-[40px]" src="/trusted-img.svg" />
        </div>
      </div>

  </>
  )
}

export default newscards
