"use client";
import { useState } from "react";

const ReferalTabs = () => {
  const [showBuy, setShowBuy] = useState(true);
  const [showExchange, setshowExchange] = useState(false);
  const [showBalance, setshowBalance] = useState(false);
  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setShowBuy(true);
            setshowExchange(false);
            setshowBalance(false);
          }}
          type="button"
          className={` ${
            showBuy
              ? "bg-[#664DFF] border-[#664DFF] text-[white]"
              : "border-[#566179] text-[#566179]"
          } border-[2px]  rounded-full  lg:text-[15px] md:text-[15px] text-[12px]  text-[500] lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3`}
        >
          By
        </button>
        <button
          onClick={() => {
            setShowBuy(false);
            setshowExchange(true);
            setshowBalance(false);
          }}
          type="button"
          className={` ${
            showExchange
              ? "bg-[#664DFF] border-[#664DFF] text-[white]"
              : "border-[#566179] text-[#566179]"
          } border-[2px]  rounded-full  lg:text-[15px] md:text-[15px] text-[12px]  text-[500] lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3`}
        >
          Exchange
        </button>
        <button
          onClick={() => {
            setShowBuy(false);
            setshowExchange(false);
            setshowBalance(true);
          }}
          type="button"
          className={` ${
            showBalance
              ? "bg-[#664DFF] border-[#664DFF] text-[white]"
              : "border-[#566179] text-[#566179]"
          } border-[2px]  rounded-full  lg:text-[15px] md:text-[15px] text-[12px]  text-[500] lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3`}
        >
          Balance
        </button>
      </div>

{showBuy &&
      <div className="flex flex-col lg:gap-4 md:gap-4 gap-3 mt-5">
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
      </div>
      }
      {showExchange &&
      <div className="flex flex-col lg:gap-4 md:gap-4 gap-3 mt-5">
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
      </div>
      }
      {showBalance &&
      
      <div className="flex flex-col lg:gap-4 md:gap-4 gap-3 mt-5">
          <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#0A1223] rounded-[8.444px]  lg:p-4 md:p-4 p-2">
          <div className="block">
            <h5 className="text-[#566179] lg:text-[14px] md:text-[14px] text-[10px] font-[400]">Amount</h5>
            <h3 className="text-[white] font-[600] lg:text-[16px] md:text-[16px] text-[12px] mt-2">$420.00</h3>
          </div>
          <div className="flex items-center gap-2 referal-drop lg:py-2 lg:px-5 md:py-2 md:px-5 py-1 px-3 ">
            <h4 className="text-[white] lg:text-[14px] md:text-[14px] text-[10px] font-[500]">USD</h4>
            <img src="/down-arrow.svg" alt=""/>
          </div>
        </div>
       
      </div>
      }
    </>
  );
};

export default ReferalTabs;
