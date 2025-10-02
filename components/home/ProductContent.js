import React from 'react'
import ProductCard from '../ui/cards/ProductCard'
import SectionHeader from './SectionHeader'
import { productCategories } from '@/data/productCategories'

const ProductContent = ({data}) => {

  return (
    <div className='flex flex-col gap-20'>

        <div className='flex flex-col gap-2'>
            <SectionHeader grayTitle="Upgrade Your Style with" blueTitle="Men's Clothing" filter={productCategories[1]} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {data.filter(item => item.category === "men's clothing").slice(0, 4).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <SectionHeader grayTitle="Discover the Best" blueTitle="Women's Clothing" filter={productCategories[2]} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {data.filter(item => item.category === "women's clothing").slice(0, 4).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <SectionHeader grayTitle="Elevate Your Style with Elegant" blueTitle="Jewelery" filter={productCategories[3]} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6'>
                {data.filter(item => item.category === "jewelery").slice(0, 4).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <SectionHeader grayTitle="Top" blueTitle="Electronics Brands" filter={productCategories[4]} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {data.filter(item => item.category === "electronics").slice(0, 4).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductContent