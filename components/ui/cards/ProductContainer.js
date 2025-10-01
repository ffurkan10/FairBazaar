import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";
import AddToCartButton from '../buttons/AddToCartButton';

const ProductContainer = ({item}) => {
  return (
    <div className='p-4 flex sm:flex-row flex-col items-center gap-6 rounded-lg bg-white shadow-[var(--shadow-custom)]'>
      <div className='sm:w-[100px] w-[100px]'>
          <Image src={item.image} alt={item.title} width={100} height={100} className="object-contain w-full" />
      </div>

      <div className='flex-1 flex flex-col gap-2 justify-between'>
          <h3 className='text-md lg:text-lg font-semibold'>{item.title}</h3>
          <p className='opacity-80 text-xs sm:text-sm font-light line-clamp-3'>{item.description}</p>
          <p className='hidden sm:block text-[var(--primary)] font-light text-xs lg:text-sm'>{item.category}</p>
      </div>

      <div className='flex flex-col h-full sm:items-end sm:gap-6 gap-2 justify-between items-end w-full sm:w-auto'>
          <p className='text-xl font-bold'>$ {item.price}</p>
          <div className='flex flex-col gap-2 items-end w-full'>
            <AddToCartButton width='w-full' item={item} text={"Add to Cart"} />
            <Link href={`/products/${item.id}`} className="w-full text-xs font-light text-[var(--primary)] flex justify-end gap-2 items-center sm:justify-between">View Details <GoArrowRight className='inline' size={12} /></Link>
          </div>
      </div>
    </div>
  )
}

export default ProductContainer