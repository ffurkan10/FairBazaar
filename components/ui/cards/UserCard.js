"use client"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import React from 'react'
import userImage from '@/public/assets/png/user.png';
import { LuPencil } from "react-icons/lu";

const UserCard = () => {

    const { user } = useAuth();

  return (
    <div className='flex items-center justify-between my-4  bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-full'>
        <div className='flex items-center gap-4'>
            <Image src={userImage} alt="User" width={60} height={60} className='rounded-full' />
            <div className='flex flex-col gap-2'>
              <p className='text-sm sm:text-md font-semibold'>{user?.name || "User Name"}</p>
              <span className='text-xs sm:text-sm opacity-80 font-light'>{user?.email || "user@example.com"}</span>
            </div>
        </div>
        <div className='flex items-center justify-center cursor-pointer bg-[var(--background)] rounded-full w-fit h-fit p-2'>
            <LuPencil size={20} />
        </div>
    </div>
  )
}

export default UserCard