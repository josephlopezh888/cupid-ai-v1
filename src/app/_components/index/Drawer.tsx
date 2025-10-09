"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseFill } from "react-icons/ri"
import Logo from './Logo'
import Button from './Button'


const Drawer = () => {
  const [open, setOpen] = useState(false)
  const hanldeOpen = () => {
    if (open) {
      document.body.classList.remove("overflow-hidden", "h-screen")
    } else {
      document.body.classList.add("overflow-hidden", "h-screen")
    }
    setOpen(!open)
  }
  return (
    <>
      <button onClick={hanldeOpen} type="button" className="ml-auto w-10 h-10 rounded-md hover:bg-white/20 flex lg:hidden items-center justify-center">
        <RiMenu3Line className="text-2xl text-white" />
      </button>
      {/* {open && ( */}
      <>
        <div className={`block lg:hidden transition-transform fixed top-0 right-0 h-screen w-full bg-[#171717] z-[999] max-w-sm ${open ? "translate-x-0" : "translate-x-[384px]"}`}>
          <div className="px-8 py-10 overflow-auto relative">
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={hanldeOpen} type="button" className="w-10 h-10 rounded-md hover:bg-white/20 flex items-center justify-center">
                <RiCloseFill className="text-2xl text-white" />
              </button>
            </div>
            <ul className="flex flex-col items-start justify-center gap-2 mt-10">
              <li className="w-full">
                <Link href="/" onClick={hanldeOpen} className="rounded-md hover:bg-white/25 py-4 px-5 block w-full text-white leading-5">Home</Link>
              </li>
              <li className="w-full">
                <Link href="/features" onClick={hanldeOpen} className="rounded-md hover:bg-white/25 py-4 px-5 block w-full text-white leading-5">Features</Link>
              </li>
              <li className="w-full">
                <Link href="/about" onClick={hanldeOpen} className="rounded-md hover:bg-white/25 py-4 px-5 block w-full text-white leading-5">About</Link>
              </li>
              <li className="w-full">
                <Link href="/" onClick={hanldeOpen} className="rounded-md hover:bg-white/25 py-4 px-5 block w-full text-white leading-5">Pricing</Link>
              </li>
              <li className="w-full">
                <Link href="/" onClick={hanldeOpen} className="rounded-md hover:bg-white/25 py-4 px-5 block w-full text-white leading-5">Gallery</Link>
              </li>
            </ul>
            <div className="flex gap-4 items-center justify-center mt-6">
              <Button type="button" variant="outline" className="h-51">Sign In</Button>
              <Button type="button" variant="outline" className="h-51">Sign Up</Button>
            </div>
          </div>
        </div>
        {open && (
          <div className="block lg:hidden fixed top-0 right-0 h-screen w-full bg-white/30 z-[29]" onClick={hanldeOpen}></div>
        )}

      </>

      {/* )} */}

    </>
  )
}

export default Drawer