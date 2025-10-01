import { useProduct } from '@/context/ProductContext';
import React from 'react'
import { IoClose } from 'react-icons/io5'

const ProductSidebarMobile = ({ showFilters, setShowFilters, productCategories }) => {
    const { setSelectedFilter, selectedFilter } = useProduct();

    const handleSelect = (category) => {
        setSelectedFilter(category);
        setShowFilters(false);
    };

  return (
    <div className={`fixed inset-0 z-50 flex justify-start transition-opacity duration-300 ease-out
        ${showFilters ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        <div className="flex-1 bg-black/40 transition-opacity duration-300 ease-out" onClick={() => setShowFilters(false)} />

        <div className={`absolute left-0 top-0 w-[280px] h-full bg-white px-4 py-8 shadow-xl transform transition-transform duration-300 ease-out ${showFilters ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex justify-between items-center mb-8'>
                <h3 className='text-lg font-bold'>Categories</h3>
                <IoClose size={25} className='cursor-pointer' onClick={() => setShowFilters(false)} />
            </div>
            <div className='flex flex-col gap-2'>
                {productCategories.map(category => (
                    <div key={category.id} className='flex items-center mb-2'>
                        <p 
                            className={`text-sm cursor-pointer ${selectedFilter?.id === category.id ? 'text-[var(--primary)] font-bold' : 'opacity-70'}`} 
                            onClick={() => handleSelect(category)}
                        >
                            {category.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductSidebarMobile