"use client"
import { useProduct } from '@/context/ProductContext';
import React, { useEffect } from 'react'
import Spinner from '../spinner';
import ProductContainer from '../ui/cards/ProductContainer';
import { getProducts } from '@/lib/api';

const ProductContent = () => {

  const { filteredProducts, isLoading, setIsLoading, setProducts } = useProduct();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
    }, []);

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