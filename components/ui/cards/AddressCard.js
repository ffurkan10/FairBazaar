import React from 'react'
import { LuPencil } from 'react-icons/lu'

const AddressCard = () => {
  return (
    <div className='flex items-center justify-between bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-full'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm sm:text-md font-semibold'>Shipping Address</p>
          <span className='text-xs sm:text-sm opacity-80 font-light'>123 Main St, Anytown, USA</span>
        </div>

        <div className='flex items-center justify-center cursor-pointer bg-[var(--background)] rounded-full w-fit h-fit p-2'>
          <LuPencil size={20} />
        </div>
    </div>
  )
}

export default AddressCard