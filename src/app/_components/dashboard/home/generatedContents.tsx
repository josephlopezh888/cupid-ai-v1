

const generatedContents = () => {
  return (
    <div className="p-6 rounded-lg w-full generated-card">
      <div className="flex lg:flex-row md:flex-row sm:flex-row  flex-col items-center justify-between gap-4">
        <div className="block w-full">
        <p className="text-[12px] lg:text-[14px] md:text-[12px] text-[#E8E3FF] font-[400]">Total Generated Contents</p>
        <div className="flex max-w-[400px] items-center justify-between gap-2 w-full">
        <h2 className="lg:text-[40px] md:text-[28px] text-[22px] text-[white] font-[600]">2892 Images</h2>
        <span className="text-[#39F535] text-[10px] md:text-[10px] lg:text-[12px]  font-[600] inline-block py-[2px] px-2"
        style={{
          borderRadius: '31.667px',
border: '0.528px solid rgba(193, 203, 255, 0.12)',
background: 'rgba(193, 203, 255, 0.10)',

backdropFilter: 'blur(5.277777671813965px)',
        }}
        >+23%</span>
        </div>
        <div className="flex mt-6">
          <div className="flex gap-2 flex-col lg:pr-7 lg:mr-7 md:pr-5 md:mr-5 pr-3 mr-3 border-r border-[#8871FE]">
            <h5 className="text-[#C9BFFF] lg:text-[12px] md:text-[10px] text-[10px] font-[400] ">Current Plan</h5>
            <h2 className="text-[white] text-[14px] md:text-[14px] lg:text-[16px] font-[600]">Entrepreneur</h2>
          </div>
          <div className="flex gap-2 flex-col lg:pr-7 lg:mr-7 md:pr-5 md:mr-5 pr-3 mr-3 border-r border-[#8871FE]">
            <h5 className="text-[#C9BFFF] lg:text-[12px] md:text-[10px] text-[10px] font-[400] ">Expiration Date</h5>
            <h2 className="text-[white] text-[14px] md:text-[14px] lg:text-[16px] font-[600]">10/29/23</h2>
          </div>
          <div className="flex gap-2 flex-col ">
            <h5 className="text-[#C9BFFF] lg:text-[12px] md:text-[10px] text-[10px] font-[400] ">Total Spent</h5>
            <h2 className="text-[white] text-[14px] md:text-[14px] lg:text-[16px] font-[600]">$4,550</h2>
          </div>
        </div>
        </div>
        <div className="flex w-[300px] items-center justify-between ">
        <img className="max-w-[400px] w-full" src="/generated-content-img.png" alt=""/>
      </div>
      </div>
     
    </div>
  )
}

export default generatedContents