"use client"
import { useCart } from '@/context/CartContext'
import { useOrder } from '@/context/OrderContext'
import Image from 'next/image'
import React, { useEffect } from 'react'

const SummaryDetail = () => {
    const { newOrder } = useOrder()
    const { setCheckout, clearCart } = useCart()

    useEffect(() => {
        setCheckout(false);
        clearCart();
    }, [])

  return (
    <div className='flex flex-col'>
        {newOrder.products && newOrder.products.map((item) => (
            <div key={item.id} className='flex justify-between items-center border-b border-[var(--border)] py-4 last:border-0'>
                <div className='flex items-center gap-4 w-2/3'>
                    <Image src={item.image} alt={item.title} width={80} height={80} />
                    <div className='flex flex-col gap-2'>
                        <p className='sm:text-sm text-xs font-semibold'>{item.title}</p>
                        <p className='sm:text-sm text-xs text-[var(--light-hover)]'>Quantity: {item.quantity}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end gap-2'>
                    <p className='sm:text-sm text-xs font-semibold'>${item.price}</p>
                    <p className='sm:text-sm text-xs text-right text-[var(--green)]'>{newOrder.status}</p>
                </div>
            </div>
        ))}

        <div className='mt-4 flex justify-between items-center'>
            <p className='sm:text-lg text-md font-semibold'>Total:</p>
            <p className='sm:text-lg text-md font-semibold'>${parseFloat(newOrder.total).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default SummaryDetail