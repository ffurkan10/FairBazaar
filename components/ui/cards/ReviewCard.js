import React from 'react'
import { FaStar } from 'react-icons/fa'
import userImage from "@/public/assets/png/user.png"
import Image from 'next/image'

const ReviewCard = ({ review }) => {
  return (
    <div className='p-4 border-b border-[var(--border)] last:border-0 flex items-center gap-4'>
        <Image src={userImage.src} width={48} height={48} alt="User" className='w-12 h-12 rounded-full' />
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <FaStar size={16} className='text-[var(--yellow)]' />
                <span>{review.rating}</span>
            </div>
            <p className='text-sm font-light'>{review.content}</p>
        </div>
    </div>
  )
}

export default ReviewCard