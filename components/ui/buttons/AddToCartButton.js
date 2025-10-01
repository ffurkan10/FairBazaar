"use client"
import { useCart } from '@/context/CartContext';
import React from 'react'

const AddToCartButton = ({text, item, width = "w-fit"}) => {

    const { addToCart } = useCart();

    const handleClick = (e) => {
        e.stopPropagation();
        addToCart(item);
    }

    return (
        <button onClick={(e) => handleClick(e)} className={`bg-[var(--button-bg)] h-[40px] sm:text-sm text-xs text-white p-2 rounded-md hover:bg-[var(--hover-primary)] transition-colors duration-200 cursor-pointer ${width ? width : ''}`}>{text}</button>
    )
}

export default AddToCartButton