"use client"
import React from 'react'
import InputIban from '../inputs/InputIban'
import InputCvv from '../inputs/InputCvv'
import InputDate from '../inputs/InputDate'
import { useOrder } from '@/context/OrderContext'
import Button from '../buttons/Button'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

const PaymentCard = () => {
    const {cart, total } = useCart()
    const { createOrder } = useOrder();
    const { user } = useAuth();

    const handleSubmit = async () => {
        await createOrder({
            products: cart,
            total,
            userId: user.id
        })
        
    }

  return (
    <div className='sticky top-[100px] bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-full'>
        <p className='text-lg font-semibold mb-4'>Payment Method</p>
        <div className='flex flex-col gap-4'>
            <InputIban />

            <div className='grid grid-cols-2 gap-4'>
                <InputCvv />
                <InputDate />
            </div>
        </div>

        <div className='border-t border-[var(--border)] mt-4 pt-4'>
            <Button handleClick={handleSubmit} text={"Proceed to Checkout"} width={"w-full"} />
        </div>
    </div>
  )
}

export default PaymentCard