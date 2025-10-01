"use client"
import React, { useEffect, useState } from 'react'
import { productCategories } from '@/data/productCategories'
import { useProduct } from '@/context/ProductContext';
import { IoFilter } from "react-icons/io5";
import ProductSidebarMobile from './ProductSidebarMobile';

const ProductPageSidebar = () => {
    const { setSelectedFilter, selectedFilter, products, setFilteredProducts } = useProduct();
    const [showFilters, setShowFilters] = useState(false);

    //! Filtreleme mantığı
    useEffect(() => {
        const filtered = products.filter((item) => {
            if (selectedFilter?.name === "all") return true;
            return item.category === selectedFilter?.name;
        });
        setFilteredProducts(filtered);
    }, [selectedFilter, products]);

    return (
        <>
            {/* Pc tarafı */}
            <div className='sticky top-4 w-[250px] pr-4 h-fit mr-4 hidden lg:block'>
                <p className='text-lg font-bold mb-4'>Categories</p>
                <ul className='flex flex-col gap-2'>
                    {productCategories.map(category => (
                        <li key={category.id}>
                            <p 
                                className={`cursor-pointer ${selectedFilter?.id === category.id ? 'text-[var(--primary)] font-bold' : 'opacity-70'}`} 
                                onClick={() => setSelectedFilter(category)}
                            >
                                {category.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobil tarafı */}
            <div className='w-fit mb-4 lg:hidden'>
                <div className='w-full'>
                    <div 
                        onClick={() => setShowFilters(true)} 
                        className=' bg-white list-none flex items-center gap-2 cursor-pointer w-full px-4 py-2 border border-[var(--border)] rounded-md'
                    >
                        <IoFilter size={20} />
                    </div>
                </div>
            </div>

            <ProductSidebarMobile productCategories={productCategories} showFilters={showFilters} setShowFilters={setShowFilters} />
        </>
    )
}

export default ProductPageSidebar
