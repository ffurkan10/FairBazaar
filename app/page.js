import ProductContent from '@/components/home/ProductContent';
import { getProducts } from '@/lib/api';
import GetServerSide from '@/lib/getServerSide';
import React from 'react'

const Home = async () => {

  const data = await GetServerSide(`https://fakestoreapi.com/products`);

  console.log(data);
  

  return (
    <div className='container'>

      <div className='flex flex-col gap-8 pt-12'>
        <ProductContent data={data} />
      </div>
    </div>
  )
}

export default Home