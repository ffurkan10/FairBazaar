import Breadcrumbs from '@/components/breadcrumb'
import ProductPageSidebar from '@/components/layout/ProductPageSidebar'
import ProductContent from '@/components/product/ProductContent'
import React from 'react'

const Products = () => {
  return (
    <div className='container'>
      <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }]} />

      <div className='flex flex-col lg:flex-row relative '>
        <ProductPageSidebar />
        <div className='flex-1 pl-0 lg:pl-4'>
          <ProductContent />
        </div>
      </div>
    </div>
  )
}

export default Products