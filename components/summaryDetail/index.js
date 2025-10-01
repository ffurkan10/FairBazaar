"use client"
import { useOrder } from '@/context/OrderContext'
import Image from 'next/image'
import React from 'react'

const SummaryDetail = () => {
    const { newOrder } = useOrder()

  return (
    <div className='flex flex-col'>
        {newOrder.products && newOrder.products.map((item) => (
            <div key={item.id} className='flex justify-between items-center border-b border-[var(--border)] py-4 last:border-0'>
                <div className='flex items-center gap-4 w-2/3'>
                    <Image src={item.image} alt={item.title} width={80} height={80} />
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-semibold'>{item.title}</p>
                        <p className='text-sm text-[var(--light-hover)]'>Quantity: {item.quantity}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-2'>
                    <p className='text-sm font-semibold'>${item.price}</p>
                    <p className='text-sm text-[var(--green)]'>{newOrder.status}</p>
                </div>
            </div>
        ))}

        <div className='mt-4 flex justify-between items-center'>
            <p className='text-lg font-semibold'>Total:</p>
            <p className='text-lg font-semibold'>${parseFloat(newOrder.total).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default SummaryDetail