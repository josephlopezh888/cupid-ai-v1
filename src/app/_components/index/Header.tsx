"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Drawer from "./Drawer";
import DashBtn from "~/app/_components/buttons/login/signup"
import Dashb from "~/app/_components/buttons/login/dashboard"
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="fixed w-full z-50 bg-black/5 backdrop-blur-lg">
      <div className="px-[3rem] xl:px-container max-w-container mx-auto py-6 ">
        <div className="flex items-center">
          <Logo />
          <nav className="max-w-xl flex-1 py-4 h-51 mx-auto hidden lg:block" data-aos="fade-down">
            <ul className="flex items-center justify-center gap-10">
              <li><Link href={'/'} className=' text-tx1 hover:text-slctd1'>Home</Link></li>
              <li><Link href={'/features'} className=' text-tx1 hover:text-slctd1'>Features</Link></li>
              <li><Link href={'/about'} className=' text-tx1 hover:text-slctd1'>About</Link></li>
              <li><Link href={'/pricing'} className=' text-tx1 hover:text-slctd1'>Pricing</Link></li>
              <li><Link href={'/gallery'} className=' text-tx1 hover:text-slctd1'>Gallery</Link></li>
            </ul>
          </nav>
          <div className="lg:flex gap-4 items-center hidden">
          {session ? (
            <Dashb></Dashb>
      ) : (
        <DashBtn></DashBtn>
      )}
          </div>
        <Drawer />
        </div>
      </div>
    </header>
  )
}

export default Header