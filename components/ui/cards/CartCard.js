"use client"
import Image from 'next/image'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useCart } from '@/context/CartContext';

const CartCard = ({item}) => {

    const {removeFromCart, updateQuantity} = useCart();

  return (
    <div className='border-b border-[var(--border)] last:border-0 pb-6 pt-6'>
        <div className='flex items-center justify-between gap-6'>
            <div className='flex gap-6'>
                <Image src={item.image} alt={item.title} width={120} height={120} className='object-contain md:w-[120px] md:h-[120px] w-[100px] h-[100px]' />
                <div className='flex flex-col gap-2'>
                    <p className='text-sm md:text-md'>{item.title}</p>
                    <p className='text-sm md:text-md font-semibold'>${item.price}</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-2'>
                <div onClick={() => updateQuantity(item.id, item.quantity + 1)} className='flex items-center justify-center cursor-pointer bg-[var(--background)] rounded-full w-fit h-fit p-2'>
                    <FaPlus size={16} />
                </div>
                <p>{item.quantity}</p>
                <div onClick={() => updateQuantity(item.id, item.quantity - 1)} className='flex items-center justify-center cursor-pointer bg-[var(--background)] rounded-full w-fit h-fit p-2'>
                    <FaMinus size={16} />
                </div>
            </div>
        </div>
        <div className='flex items-end w-full'>
            <div onClick={() => removeFromCart(item.id)} className='text-sm text-[var(--light-text)] hover:text-[var(--light-hover)] transition-colors underline cursor-pointer font-semibold mt-4'>Remove</div>
        </div>
    </div>
  )
}

export default CartCard