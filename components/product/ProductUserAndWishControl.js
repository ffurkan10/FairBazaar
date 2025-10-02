"use client"
import { useAuth } from '@/context/AuthContext';
import { useModal } from '@/context/ModalContext';
import React from 'react'
import AddToCartButton from '../ui/buttons/AddToCartButton';
import FavoriteButton from '../ui/buttons/FavoriteButton';
import Button from '../ui/buttons/Button';
import { useProduct } from '@/context/ProductContext';

const ProductUserAndWishControl = ({data}) => {

    const { showModal } = useModal();
    const { user } = useAuth();
    const { setSelectedProduct } = useProduct();


  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4 w-full'>
            <AddToCartButton width='w-full' item={data} text={"Add to Cart"} />
            {user && <FavoriteButton item={data} />}
        </div>
        {user && <Button text={"Add to Wishlist"} width='w-fit' handleClick={() => {showModal("wishlistUpdate"); setSelectedProduct(data)}} />}
    </div>
  )
}

export default ProductUserAndWishControl