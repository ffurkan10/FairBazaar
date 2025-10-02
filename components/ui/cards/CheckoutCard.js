"use client"
import { useCart } from '@/context/CartContext'
import React from 'react'
import Button from '../buttons/Button'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import LinkButton from '../buttons/LinkButton'

const CheckoutCard = () => {
    const {cart, total, checkout, setCheckout} = useCart()
    const {user} = useAuth()
    
    return (
        <div className='sticky top-[100px] bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-full'>
            <p className='text-lg font-semibold mb-4'>Order Summary</p>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Total Items:</p>
                    <p className='text-sm font-semibold'>{cart.length}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Total Price:</p>
                    <p className='text-sm font-semibold'>${total.toFixed(2)}</p>
                </div>
            </div>
            <div className='border-t border-[var(--border)] mt-4 pt-4'>
                {user ? (
                    <Button handleClick={() => setCheckout(true)} text={"Checkout"} width={"w-full"} />
                ) : (
                    <p className='text-sm text-[var(--red)]'>Please sign in to proceed to checkout. <Link href="/login" className='font-semibold'>Sign In</Link></p>
                )}
            </div>
        </div>
    )
}

export default CheckoutCard