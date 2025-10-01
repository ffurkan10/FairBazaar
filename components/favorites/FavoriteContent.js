"use client"
import { useFavorite } from '@/context/FavoriteContext'
import Image from 'next/image';
import React from 'react'
import FavoriteButton from '../ui/buttons/FavoriteButton';
import AddToCartButton from '../ui/buttons/AddToCartButton';
import favoriteImg from '@/public/assets/svg/favorites.svg'
import Link from 'next/link';

const FavoriteContent = () => {
    const { favorites } = useFavorite();

  return (
    <>
      {favorites.length > 0 ? (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {favorites.map(item => (
          <div key={item.id} className='flex flex-col sm:flex-row items-center justify-between gap-4 p-4 shadow-[var(--shadow-custom)] rounded-lg bg-white'>
              <Image src={item.image} alt={item.title} width={100} height={100} className='object-contain' />
              <div className='flex flex-col justify-between h-full w-full sm:flex-1 ml-4'>
                  <div className='flex justify-between items-center'>
                      <p className='sm:text-sm sm:font-semibold font-medium text-xs w-[60%] sm:w-[80%]'>{item.title}</p>
                      <FavoriteButton item={item} bg='bg-[var(--background)]' />
                  </div>
                  <div className='flex items-center justify-between gap-2 mt-2'>
                      <p className='text-md sm:text-lg font-bold mt-2'>$ {item.price}</p>
                      <AddToCartButton item={item} text={"Add to Cart"} />
                  </div>
              </div>
          </div>
        ))}
      </div>): (
      <div className='flex flex-col items-center justify-center gap-4'>
        <Image src={favoriteImg} alt='No favorites' width={200} height={200} className='mx-auto' />
        <p className='text-center text-lg font-semibold mt-6'>Your favorites are currently empty!</p>
        <p>{"Looks like you haven't made your choice yet."}</p>
        <Link href="/" className='text-[var(--primary)] font-semibold'>Go to Products</Link>
      </div>
      )}
    </>

  )
}

export default FavoriteContent