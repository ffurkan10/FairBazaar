import Image from 'next/image'
import React from 'react'
import AddToCartButton from '../buttons/AddToCartButton'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

const ProductCard = ({item}) => {

  return (
    <div className="relative flex flex-col justify-between sm:gap-6 gap-3 p-4 rounded-lg shadow-[var(--shadow-custom)] w-full h-full bg-white border border-transparent hover:border-[var(--primary)] transition">
        <div className="flex items-center gap-1 absolute top-0 right-0 bg-[var(--background)] px-2 py-1 rounded-bl-lg rounded-tr-lg">
            <FaStar size={16} className="text-[var(--yellow)]" />
            <span className="text-sm font-light opacity-70">( {item.rating.count} )</span>
        </div>
        
        <Link href={`/products/${item.id}`} className="flex flex-col gap-4">
            <div className="flex justify-center items-center w-full">
                <Image src={item.image} alt={item.title} width={200} height={200} className="object-contain md:w-[180px] md:h-[180px] w-[160px] h-[160px] sm:mb-4"/>
            </div>
            <p className="text-md font-bold">{item.title}</p>
        </Link>

        <div className="flex items-center justify-start">
            <span className="text-md font-semibold">${item.price}</span>
        </div>

        <div className="w-full">
            <AddToCartButton text="Add to Cart" width="w-full" item={item} />
        </div>
    </div>

  )
}

export default ProductCard