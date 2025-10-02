"use client"
import { useProduct } from '@/context/ProductContext';
import React from 'react'
import Spinner from '../spinner';
import ProductContainer from '../ui/cards/ProductContainer';

const ProductContent = () => {

  const { filteredProducts, isLoading } = useProduct();

  if (isLoading) {
    return <div className='flex justify-center'><Spinner /></div>;
  }

  return (
    <div className='flex flex-col gap-8'>
      {filteredProducts.map(product => (
        <ProductContainer key={product.id} item={product} />
      ))}
    </div>
  )
}

export default ProductContent