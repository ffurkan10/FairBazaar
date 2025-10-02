import ProductContent from '@/components/home/ProductContent';
import HomeHeroSlider from '@/components/sliders/HomeHeroSlider';
import GetServerSide from '@/lib/getServerSide';
import React from 'react'

const Home = async () => {

  const data = await GetServerSide(`https://fakestoreapi.com/products`);

  return (
    <div className='container pt-10'>

      <HomeHeroSlider />

      <div className='flex flex-col gap-8 pt-12'>
        <ProductContent data={data} />
      </div>
    </div>
  )
}

export default Home