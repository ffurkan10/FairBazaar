import Breadcrumbs from '@/components/breadcrumb';
import { getProductById } from '@/lib/api';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import ReviewSummary from '@/components/chart/ReviewSummary';
import ProductUserAndWishControl from '@/components/product/ProductUserAndWishControl';

export async function generateMetadata({ params }) {
  const { id } = await params
  const {data} = await getProductById(id);
  
  console.log("meta id",id);
  console.log("meta data",data);

  if (!data) {
    return { title: "Product Detail", description: "Product Detail" };
  }

  return {
    title: data.title,
    description: data.description,
  };
  
}

const ProductDetail = async ({params}) => {
  const { id } = await params
  const {data} = await getProductById(id);

  console.log("page id",id);
  console.log("page data",data);

  return (
    <div className='container'>
      <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: data?.title, href: `` }]} />

      <div className='flex flex-col md:flex-row lg:justify-start justify-between gap-10 md:mt-16 mt-6'>
        <div className='md:w-1/3 w-full flex items-center justify-center'>
          <Image src={data?.image} alt={data?.title} width={350} height={350} className='object-contain sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]' />
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-6'>
          <div className='flex items-center justify-between gap-6 w-full'>
            <h1 className='sm:text-xl text-md font-bold w-[80%]'>{data?.title}</h1>
            <div className='flex items-center justify-center gap-2 bg-white p-2 rounded-lg w-[100px]'>
              <FaStar size={16} className='text-[var(--yellow)]' />
              <span className='sm:text-sm text-xs font-light opacity-70'>( {data?.rating.count} )</span>
            </div>
          </div>
          <p className='sm:text-sm text-xs font-light'>{data?.description}</p>
          <p className='sm:text-3xl text-xl font-bold'>${data?.price}</p>

          <ProductUserAndWishControl data={data} />
        </div>
      </div>

      <div className='mt-20 flex flex-col gap-6'>
        <h2 className='sm:text-xl text-lg font-bold'>Customer Reviews</h2>

        <ReviewSummary average={data?.rating?.rate} totalReviews={data?.rating?.count} breakdown={{5: 132, 4: 68, 3: 22, 2: 7, 1: 11}} />
      </div>
    </div>
  )
}

export default ProductDetail