import React from 'react'
import paymentImage from '@/public/assets/svg/payment-confirm.svg'
import Image from 'next/image'
import Link from 'next/link';
import SummaryDetail from '@/components/summaryDetail';

const Summary = async ({params}) => {
    const { summary } = await params;

  return (
    <div className='container'>
        <div className='flex justify-between gap-10 mt-10'>
            <div className='flex flex-col gap-2 items-center w-1/3'>
                <Image src={paymentImage} alt='payment-confirm' width={400} height={400} />
                <p className='text-center text-lg font-semibold mt-6'>Your order is successfully created!</p>
                <span className='text-sm opacity-80'>Thanks for choosing us. See you later!</span>
                <Link className='text-[var(--primary)] font-semibold' href='/'>Return to Home</Link>
            </div>
            <div className='flex flex-col bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-1/2'>
                <p className='text-lg text-center font-semibold'>Order Summary <span className='text-[var(--primary)] font-semibold'>#{summary}</span></p>
                
                <SummaryDetail />
            </div>
        </div>
    </div>
  )
}

export default Summary