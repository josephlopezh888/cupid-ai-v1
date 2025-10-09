import ReferalTab from './ReferalTabs'
const refereals = () => {
  return (
<>
<div className="p-6 rounded-lg w-full bg-white news-box">
    <div className="flex justify-between items-center pb-3 mb-6 border-b border-[#182542]">
    <h2 className="text-white lg:text-[23px] md:text-[23px] text-[18px] font-[600]">Referrals</h2>
    <img src='/option-dots.svg' alt=''/>
    </div>
    <div className="mt-4">
        <ReferalTab/>
    </div>
    
   </div></>
  )
}

export default refereals