"use client"
import React, { useContext } from 'react';
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function HomeHeader() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    return (
        <div className='p-5 shadow-md flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo_img' width={40} height={40} />
                <h2 className='font-bold text-lg'>Ai Room Design</h2>
            </div>
            <Link href={'/dashboard/buy-credits'}>
                <Button variant="ghost" className="rounded-full text-primary">Buy More Credits</Button>
            </Link>

            <div className='flex gap-7 items-center'>
                {/* <div className='flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
                    <Image src={'/star.png'} alt='credit_img' width={20} height={20} />
                    <h2>{userDetail?.credits}</h2>
                </div> */}
                {/* <UserButton /> */}
                <div>
                    <Link href={'/dashboard'}>
                        <Button>-Dashboard-</Button>
                    </Link>
                </div>
                <UserButton />
            </div>
        </div>
    )
}

export default HomeHeader


    