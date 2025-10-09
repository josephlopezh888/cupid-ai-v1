import Link from "next/link"
import Newscards from "./newscards"


const news = () => {
  return (
   <>
   <div className="p-6 rounded-lg w-full bg-white news-box">
    <div className="flex justify-between items-center pb-3 mb-6 border-b border-[#182542]">
    <h2 className="text-white lg:text-[23px] md:text-[23px] text-[18px] font-[600]">News</h2>
    <Link href="#" className="flex gap-2 items-center bg-[#664DFF] rounded-[33.778px] text-[white] text-[16px] font-semibold py-2 px-5">
        Filter
        <img src="/filter.svg" alt=""/>
    </Link>
    </div>
    <div className="flex flex-col gap-4">
    <Newscards/>
    <Newscards/>
    </div>
   </div>
   </>
  )
}

export default news