"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserInfo from './user-info';
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import Drawer from "./drawer"

function Header({ title = '' }) {
    const session = useSession();
    let email = session.data?.user.email;
    return (
        <div className='w-full flex h-20 items-center justify-between float-right'>
            <Drawer/>
            <div className='flex py-2 logo-width w-[550px] items-center ml-[20px]'>
                <Link href="/">
                    <Image
                        src={'/logo.png'}
                        width={40}
                        height={40}
                        alt='logo'></Image>
                </Link>

                <Link href="/">
                    <h1 className='text-[26px] py-3 font-bold bg-gradient-to-r from-violet1 to-pink1 bg-clip-text text-transparent'>CUPID
                        <span className='text-white'>AI
                        </span></h1>
                </Link>

                <h1 className='text-[32px] pl-[120px] font-bold header-title'>{title}</h1>
            </div>

            <div className='w-[500px] h-[50px] flex gap-[17px] justify-end mr-[20px]'>

                <div className="relative search flex items-center w-[320px] h-12 rounded-[60px] focus-within:shadow-lg bg-[#0F0F0F] overflow-hidden">
                    <div className="grid place-items-center ml-[20px] h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#3F495F">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full bg-[#0F0F0F] outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                    />
                </div>

                <div className='hide-button w-[50px] h-[50px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='hide-button w-[50px] h-[50px] rounded-full bg-[#0F0F0F] cursor-pointer flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3F495F" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </div>

                <UserInfo email={email || 'you@gmail.com'} />
            </div>
        </div>
    );
};

export default Header;
