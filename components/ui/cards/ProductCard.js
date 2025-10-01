import Image from 'next/image'
import React from 'react'
import AddToCartButton from '../buttons/AddToCartButton'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

const ProductCard = ({item}) => {

  return (
    <Link href={`/products/${item.id}`} className="flex flex-col justify-between gap-6 p-4 cursor-pointer rounded-lg shadow-[var(--shadow-custom)] w-full h-full bg-white border border-transparent hover:border-[var(--primary)] transition">
        <div className='flex justify-center items-center w-full h-48'>
            <Image src={item.image} alt={item.title} width={200} height={200} className="w-full h-full object-contain mb-4"/>
        </div>
        <div className='flex align-start'>
            <p className="text-md font-bold">{item.title}</p>
        </div>
        <div className='flex align-center justify-between'>
            <span className="text-md font-semibold">${item.price}</span>
            <div className='flex items-center gap-1'>
                <FaStar size={20} className='text-[var(--yellow)]' />
                <span className='text-sm font-light opacity-70'>( {item.rating.count} )</span>
            </div>
        </div>
        <div className='w-full'>
            <AddToCartButton text="Add to Cart" width='w-full' item={item} />
        </div>
    </Link>
  )
}

export default ProductCard