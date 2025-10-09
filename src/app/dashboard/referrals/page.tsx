"use client"
import Header from '~/app/_components/dashboard/header'
import Sidebar from '~/app/_components/dashboard/sidebar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { api } from '~/trpc/react';
import { useSession } from 'next-auth/react'
import { Icons } from "~/utils/icons";


type withdrawalModel = {
    id: string;
    date: string;
    amount: BigInteger;
    status: StatusModel;
    note: NoteModel;
};

type NoteModel = {
    id: string;
    btc: string;
    paypal: string;
    ltc: string;
    note: string;
}

enum StatusModel {
    PENDING,
    REJECTED,
    COMPLETED
}



export default function Refferals() {
    const { data: session } = useSession();
    let email = session?.user.email;

    const accountInfo = api.user.me.useQuery({ email: email || "" });
    const getWithdrawal = api.referrals.getWithdrawals.useQuery({ email: email || "" });
    const WithdrawalData = getWithdrawal.data || [];

    const [showNoteDetails, setShowNoteDetails] = useState(false);
    const [showWithdrawalDiv, setShowWithdrawalDiv] = useState(false);
    const [selectedWithdrawal, setSelectedWithdrawal] = useState<NoteModel | null>(null);

    const toggleNoteDetails = (withdrawal: any) => {
        setSelectedWithdrawal(withdrawal.note[0]);
        setShowNoteDetails(!showNoteDetails);
    };

    const copylink = () => {
        navigator.clipboard.writeText(accountInfo.data?.referral[0]?.rfCode || "null")
    }
    if (!accountInfo.data?.referral[0]?.rfCode) {
        return (
            <>
                <div className='max-h-[calc(100vh-80px)] max-w-[calc(100vw-260px)] absolute w-full h-full ml-[260px] mt-[80px] overflow-x-hidden overflow-y-auto scrollbar-hide flex flex-1 items-center justify-center'> <Icons.loading className="h-24 w-24 animate-spin text-zinc-300"></Icons.loading> </div>
                <Header title='Referrals'></Header>
                <Sidebar Selected='Referrals'></Sidebar>
            </>
        )
    }

    return (
        <>
            <div className='max-h-[calc(100vh-80px)] max-w-[calc(100vw-260px)] absolute w-full h-full ml-[260px] mt-[80px] overflow-x-hidden overflow-y-auto scrollbar-hide'>
                <div className='absolute ml-[1000px] w-[500px] h-[860px] border mt-[30px] rounded-[30px]  bg-radial-gradient'>
                    <h1 className='text-[30px] font-bold mt-[40px] ml-[60px]'>Refer A Friend</h1>
                    <h1 className='text-[20px] mt-[20px] ml-[60px]'>GIVE $20, GET 10%</h1>
                    <h1 className='mt-[5px] ml-[60px]'>Tell your friend to enter your code at <br></br>the checkout:</h1>

                    <div className="w-[380px] h-[70px] flex justify-center items-center mx-auto border-dashed border-[4px] bg-white text-[#664DFF] font-bold text-[20px] border-[#664DFF] rounded-[10px] mt-[60px]">{accountInfo.data?.referral[0]?.rfCode}</div>
                    <div className="w-[380px] h-[30px]  justify-center items-center ml-[60px] mt-[20px]">
                        <ul className='flex gap-[15px] justify-evenly'>
                            <li className='flex items-center cursor-pointer' onClick={copylink}>
                                <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                                    <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
                                </svg>
                                <h1 className='ml-[6px]'>Copy Code</h1>
                            </li>
                            <li className='flex items-center'>
                                <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                </svg>
                                <h1 className='ml-[6px]'>Edit Code</h1>
                            </li>
                        </ul>
                    </div>
                    <Link href={`mailto: recipient@email.com?body=Use%20my%20referral%20code%20in%20CupidAI:%20${accountInfo.data?.referral[0]?.rfCode}`}>
                        <div className="w-[380px] bg-[#664DFF] rounded-[5px] h-[70px] mt-[80px] ml-[60px] flex justify-center items-center text-[18px]">Share By Email</div>
                    </Link>

                    <div className='w-[380px] h-[95px] flex items-center flex-col mt-[30px] text-[16px] ml-[60px]'>
                        or use:
                        <div className="w-full h-[30px] mt-[10px]">
                            <ul className='w-full flex justify-evenly'>
                                <li>
                                    <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                                    </svg>
                                </li>
                                <li>
                                    <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                    </svg>
                                </li>
                                <li>
                                    <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                        <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                        <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                    </svg>
                                </li>
                                <li>
                                    <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                                    </svg>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href='/tos'>
                        <h1 className='underline text-[18px] font-semibold ml-[60px] mt-[20px]'>Terms Of Conditions</h1>
                    </Link>
                </div>
                <div className='w-[830px] h-[200px] ml-[60px] mt-[30px] border rounded-[10px] flex flex-col items-center'>
                    <div className='w-[95%] h-[40px] bg-[#6F3CF6] my-[20px] flex items-center'>
                        <p className='ml-[10px] font-bold'>To become CupidAI advocate refer up to 8 friends</p>
                    </div>
                    <div className='w-[95%] h-[40px]  flex justify-between items-center'>
                        <h1 className='font-bold'>REWARDS</h1>
                        <div className=''>
                            <ul className='flex gap-[15px]'>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                    </svg>
                                    <h1 className='ml-[6px]'>3 DAY SUB</h1>
                                </li>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                    </svg>
                                    <h1 className='ml-[6px]'>SURPRISE GIFT</h1>

                                </li>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                    </svg>
                                    <h1 className='ml-[6px]' >SURPRISE GIFT</h1>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[95%] flex justify-between">
                        <h1 className=' text-[#323232]'>0</h1>
                        <h1 className=' text-[#323232]'>3</h1>
                        <h1 className=' text-[#323232]'>5</h1>
                        <h1 className=' text-[#323232]'>8</h1>
                    </div>
                    <div className="w-[95%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-[#6F3CF6] h-2.5 rounded-full w-[0%]"></div>
                    </div>
                    <div className="w-[95%] flex mt-[10px]">
                        <h1><b>Invite 1</b> more to get <b>3 DAY SUB</b></h1>
                    </div>

                </div>
                <div className='w-[830px] h-[300px] ml-[60px] mt-[30px] flex basis-2/4 flex-wrap justify-between items-center'>
                    <div className='w-[400px] h-[120px] border rounded-[10px] '>
                        <div className="flex w-[95%] justify-between mt-[25px] px-[20px]">
                            <h1 className='text-[28px] font-bold'>{accountInfo.data?.referral[0]?.friendsInvited}</h1>
                            <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                        <h1 className='text-[14px]  ml-[20px] mt-[5px] font-semibold'>FRIENDS INVITED</h1>
                    </div>
                    <div className='w-[400px] h-[120px] border rounded-[10px]'>
                        <div className="flex w-[95%] justify-between mt-[25px] px-[20px]">
                            <h1 className='text-[28px] font-bold'>{accountInfo.data?.referral[0]?.friendsReffered}</h1>
                            <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                        <h1 className='text-[14px]  ml-[20px] mt-[5px] font-semibold'>FRIENDS REFERRED</h1>
                    </div>
                    <div className='w-[400px] h-[120px] border rounded-[10px]'>
                        <h1 className='text-[28px]  ml-[20px] mt-[25px] font-bold'>${accountInfo.data?.referral[0]?.creditsEarned}</h1>
                        <h1 className='text-[14px]  ml-[20px] mt-[5px] font-semibold'>CREDITS EARNED</h1>
                    </div>
                    <div className='w-[400px] h-[120px] border rounded-[10px]'>
                        <h1 className='text-[28px]  ml-[20px] mt-[25px] font-bold'>${accountInfo.data?.referral[0]?.pendingWithdrawal}</h1>
                        <h1 className='text-[14px]  ml-[20px] mt-[5px] font-semibold'>PENDING WITHDRAWAL</h1>
                    </div>
                </div>
                <div className='flex'>
                    <h1 className='text-[24px] font-bold  ml-[60px] mt-[30px]'>WITHDRAWAL REQUEST</h1>
                    <button className='w-[140px] h-[40px] rounded mt-[25px] ml-[405px] bg-sBG' onClick={() => setShowWithdrawalDiv(!showWithdrawalDiv)}>Withdraw</button>
                </div>

                <div className='w-[830px] h-[300px] ml-[60px] ] mt-[20px]'>
                    <div className='w-full h-[50px] flex items-center  justify-between px-[10px]'>
                        <h1 className='text-slate-600 text-[14px]'>Amount</h1>
                        <h1 className='text-slate-600 text-[14px]'>Date</h1>
                        <h1 className='text-slate-600 text-[14px]'>Status</h1>
                        <h1 className='text-slate-600 text-[14px]'>Note</h1>
                    </div>
                    <ul>
                        {WithdrawalData.map((withdrawal) => (
                            <li key={withdrawal.id}>
                                <div className='w-full h-[50px] border-t border-b flex items-center justify-between px-[10px]'>
                                    <h1 className='text-[18px]'>{withdrawal.amount}$</h1>
                                    <h1 className='text-[18px]'>
                                        {new Date(withdrawal.date).toLocaleDateString()}
                                    </h1>
                                    <h1 className='ml-[5px]'>{withdrawal.status}</h1>
                                    <svg
                                        className="w-5 h-5 text-gray-800 dark:text-white cursor-pointer"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 4 15"
                                        onClick={() => toggleNoteDetails(withdrawal)}
                                    >
                                        <path
                                            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                        />
                                    </svg>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {showNoteDetails && selectedWithdrawal && (
                <div className='absolute w-[500px] mx-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#0a0a0a] rounded-[20px] h-[660px]'><Icons.close className='absolute ml-[450px] mt-[30px] cursor-pointer' onClick={() => setShowNoteDetails(!showNoteDetails)}></Icons.close>
                    <h2 className='text-white text-[27px] text-center mt-[20px]'>Additional<br />Information</h2>
                    <p className='text-white mt-[40px] ml-[27px]'>BTC:</p>
                    <input type='text' value={selectedWithdrawal.btc} disabled className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                    <p className='text-white mt-[10px] ml-[27px]'>LTC:</p>
                    <input type='text' value={selectedWithdrawal.ltc} disabled className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                    <p className='text-white mt-[10px] ml-[27px]'>PAYPAL:</p>
                    <input type='text' value={selectedWithdrawal.paypal} disabled className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                    <p className='text-white mt-[10px] ml-[27px]'>NOTE:</p>
                    <textarea value={selectedWithdrawal.note} disabled className=' w-[90%] mx-auto h-[100px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></textarea>
                </div >
            )
            }

            {showWithdrawalDiv && (
                <div className='absolute w-[500px] mx-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#0a0a0a] rounded-[20px] h-[660px]'><Icons.close className='absolute ml-[450px] mt-[30px] cursor-pointer' onClick={() => setShowNoteDetails(!showNoteDetails)}></Icons.close>
                    <h2 className='text-white text-[27px] text-center mt-[20px]'>Request<br />Withdrawal</h2>
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
                    <input type="number" id="visitors" min={0} max={accountInfo.data.referral[0]?.creditsEarned || 0} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    <p className='text-white mt-[40px] ml-[27px]'>BTC:</p>
                    <input type='text' placeholder="btc address..." className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                    <p className='text-white mt-[10px] ml-[27px]'>LTC:</p>
                    <input type='text' placeholder="ltc address..." className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                    <p className='text-white mt-[10px] ml-[27px]'>PAYPAL:</p>
                    <input type='text' placeholder="paypal address..." className=' w-[90%] mx-auto h-[45px] ml-[27px] mt-[10px] p-3 margin-left-20px border-gray-400 bg-[#111111] border rounded-md'></input>
                </div>
            )
            }
            <Header title='Referrals'></Header>
            <Sidebar Selected='Referrals'></Sidebar>

        </>
    )
}

