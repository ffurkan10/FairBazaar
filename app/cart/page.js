"use client"
import Breadcrumbs from '@/components/breadcrumb'
import AddressCard from '@/components/ui/cards/AddressCard'
import CartCard from '@/components/ui/cards/CartCard'
import { useCart } from '@/context/CartContext'
import React from 'react'
import empty from '@/public/assets/svg/empty-card.svg'
import Image from 'next/image'
import CheckoutCard from '@/components/ui/cards/CheckoutCard'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import PaymentCard from '@/components/ui/cards/PaymentCard'

const Cart = () => {

  const {cart, checkout } = useCart()
  const {user} = useAuth()

  return (
    <div className='container'>
      <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }]} />

      {cart.length === 0 ? (
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src={empty} alt='empty' className='mx-auto' width={300} height={300} />
          <p className='text-center text-md sm:text-lg font-semibold mt-6'>Your cart is currently empty!</p>
          <p className='text-sm sm:text-md' >{"Looks like you haven't made your choice yet."}</p>
          <Link href="/" className='text-[var(--primary)] font-semibold text-sm sm:text-md'>Return to Home</Link>
        </div>
      ) : (
        <div className='flex justify-between flex-col lg:flex-row gap-6'>
          <div className='flex flex-col gap-6 lg:w-3/5 w-full'>
            { user && <AddressCard />}

            <div className='flex flex-col bg-white p-4 rounded-lg shadow-[var(--shadow-custom)]'>
              {cart.map((item, key) => (
                <CartCard key={key} item={item} />
              ))}
            </div>

          </div>

          <div className='lg:w-1/3 w-full relative'>
            {checkout ? 
              <PaymentCard />
              :
              <CheckoutCard />
            }
          </div>
          
        </div>
      )}

    </div>
  )
}

export default Cart