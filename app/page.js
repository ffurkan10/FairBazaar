import ProductContent from '@/components/home/ProductContent';
import HomeHeroSlider from '@/components/sliders/HomeHeroSlider';
import Spinner from '@/components/spinner';
import GetProducts from '@/lib/GetProducts';
import React from 'react'

const Home = async () => {

  const data = await GetProducts();

  console.log(data);
  

  if(!data) {
    return <div className='container pt-10'><Spinner /></div>
  }

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