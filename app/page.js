import ProductContent from '@/components/home/ProductContent';
import HomeHeroSlider from '@/components/sliders/HomeHeroSlider';
import Spinner from '@/components/spinner';
// import { getProducts } from '@/lib/api';
import GetServerSide from '@/lib/getServerSide';
import React from 'react'

const Home = async () => {

  //! vercel localhosta ulaşamadığı için fetch hatası veriyor. Bu yüzden server taraflı isteği de kullanmış olmak için GetServerSide kullandım ve diret fakestoreapiye istek attım.
  //! normalde GetProducts kullanılacak.
  
  //! const {data} = await getProducts();
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