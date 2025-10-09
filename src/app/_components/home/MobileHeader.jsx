"use client";
import { useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderAccountBtn from "./HeaderaAccountBtn";
import Image from "next/image";

const MobileHeader = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <>
      <header className="py-7 bg-[#000]">
        <aside className={`header-size-bar lg:hidden md:hidden block ${showSide? 'showBar' : ''} `}>
          <HeaderNav />
        </aside>

        <div className="container flex items-center justify-between relative">
          <Image src="/logo.svg" alt="" width={150} height={100} priority />
          <div className="lg:block md:block hidden">
            <HeaderNav />
          </div>

          <div className="lg:flex md:flex hidden items-center gap-4">
            <HeaderAccountBtn />
          </div>
          <div
            onClick={() => {
              setShowSide(!showSide);
            }}
            className="hamburger lg:hidden md:hidden block"
          >
            {!showSide ? (
              <img src="/hamburger.png" alt="" />
            ) : (
              <img src="/close.png" alt="" />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
