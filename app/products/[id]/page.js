import Breadcrumbs from '@/components/breadcrumb';
import { getProductById } from '@/lib/api';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import ReviewSummary from '@/components/chart/ReviewSummary';
import ProductUserAndWishControl from '@/components/product/ProductUserAndWishControl';

export async function generateMetadata({ params }) {
  const { id } = await params

  console.log("meta id",id);
  

  const {data} = await getProductById(id);

  console.log(data);
  console.log("meta data",data);

  if(data === null){
    return {
      title: "Product Detail",
      description: "Product Detail",
    };
  }else{
    return {
      title: data?.title || "Product Detail",
      description: data?.description || "Product Detail",
    };
  }
  
}

const ProductDetail = async ({params}) => {
  const { id } = await params

  console.log("page id",id);

  const {data} = await getProductById(id);

  console.log("page data",data);

  return (
    <div className='container'>
      <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: data?.title, href: `` }]} />

      <div className='flex gap-10 mt-16'>
        <div className='w-1/3'>
          <Image src={data?.image} alt={data?.title} width={250} height={250} />
        </div>
        <div className='w-1/2 flex flex-col gap-6'>
          <div className='flex items-center justify-between gap-6 w-full'>
            <h1 className='text-xl font-bold w-[80%]'>{data?.title}</h1>
            <div className='flex items-center gap-2 bg-white p-2 rounded-lg'>
              <FaStar size={20} className='text-[var(--yellow)]' />
              <span className='text-sm font-light opacity-70'>( {data?.rating.count} )</span>
            </div>
          </div>
          <p className='text-sm font-light'>{data?.description}</p>
          <p className='text-3xl font-bold'>${data?.price}</p>

          <ProductUserAndWishControl data={data} />
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>Customer Reviews</h2>

        <ReviewSummary average={data?.rating?.rate} totalReviews={data?.rating?.count} breakdown={{5: 132, 4: 68, 3: 22, 2: 7, 1: 11}} />
      </div>
    </div>
  )
}

export default ProductDetail