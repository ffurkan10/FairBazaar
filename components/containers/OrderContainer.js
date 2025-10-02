"use client"
import { useOrder } from '@/context/OrderContext';
import moment from 'moment';
import Image from 'next/image';
import React, {  useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";

const OrderContainer = () => {
    const { orders, removeProductFromOrder } = useOrder()
    const [showDetails, setShowDetails] = useState(null);

    const handleShowDetails = (orderId) => {
        if (showDetails === orderId) {
            setShowDetails(null);
        } else {
            setShowDetails(orderId);
        }
    };

  return (
    <div className='flex flex-col mt-4'>
        {orders?.length > 0 ? (
            orders.map((item) => {
                return (
                 <div key={item.id} className='cursor-pointer border-b border-[var(--border)] py-4 last:border-0 '>
                    <div onClick={() => {handleShowDetails(item.id)}}  className='grid grid-cols-[1fr_1fr_auto] sm:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-center'>
                        <p className='text-sm font-medium'>{item.orderId}</p>
                        <p className='text-sm'>{moment(item.date).format('LL')}</p>
                        <p className='text-sm text-[var(--green)] sm:block hidden'>{item.status}</p>
                        <p className='text-sm sm:block hidden'>${parseFloat(item.total).toFixed(2)}</p>
                        <FaChevronRight className={`transition-transform duration-200 ${showDetails === item.id ? 'rotate-90' : ''}`} />
                    </div>
                    <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${showDetails === item.id ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        {item.products.map((product) => (
                            <div key={product.id} className='grid grid-cols-3 items-center w-full gap-4 mt-4'>
                                <div className='flex items-center gap-4'>
                                    <Image width={48} height={48} src={product.image} alt={product.title} className='object-contain' />
                                    <p className='text-xs sm:text-sm'>{product.title}</p>
                                </div>
                                <div className='flex flex-col items-end gap-2'>
                                    <p className='text-xs sm:text-sm font-medium'>${parseFloat(product.price).toFixed(2)}</p>
                                    <p className='text-xs text-[var(--light-hover)]'>Qty: {product.quantity}</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p onClick={() => removeProductFromOrder(item.id, product.id)} className='sm:text-sm text-xs text-[var(--red)]'>Cancel the Product</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )})
        ) : (
            <p className='text-sm text-gray-500'>No orders found.</p>
        )}
    </div>
   
  )
}

export default OrderContainer