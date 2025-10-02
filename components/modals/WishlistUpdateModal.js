"use client"
import { useOrder } from '@/context/OrderContext';
import React, { useEffect, useState } from 'react'
import InputOrderSelect from '../ui/inputs/InputOrderSelect';
import Button from '../ui/buttons/Button';
import { useProduct } from '@/context/ProductContext';
import { useModal } from '@/context/ModalContext';
import { useLayout } from '@/context/LayoutContext';

const OrderUpdateModal = () => {
    const {orders, addProductToOrder} = useOrder()
    const {selectedProduct} = useProduct()
    const {showModal} = useModal()
    const {setActiveSelect} = useLayout()
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleSubmit = () => {
        if (selectedOrder && selectedProduct) {
          console.log("Adding product to order:", selectedOrder, selectedProduct);
          
          addProductToOrder(selectedOrder.id, selectedProduct);
        }
    }

  return (
    <div onClick={() => showModal(null)} className="fixed top-0 right-0 bottom-0 left-0 bg-black/60 flex justify-center items-center z-[9999] shadow-lg">
        <div onClick={(e) => {e.stopPropagation(); setActiveSelect("")}} className="w-auto h-auto p-5 rounded-lg flex flex-col justify-center items-center bg-white shadow-[var(--shadow-custom)] gap-5">
            <div className='w-full flex flex-col items-center gap-6'>
                <p className="text-lg font-semibold text-center">Add to Wishlist</p>
                <p><b>Product to be added:</b> {selectedProduct?.title}</p>
                <InputOrderSelect data={selectedOrder?.orderId} setData={setSelectedOrder} name="orderId" labelText="Order ID" initialOptions={orders} />
                <Button text={"Update"} width='w-full' handleClick={handleSubmit} />
            </div>
        </div>
    </div>
  )
}

export default OrderUpdateModal