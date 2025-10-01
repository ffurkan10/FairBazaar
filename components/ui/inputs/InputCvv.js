import React from 'react'

const InputCvv = () => {
  return (
    <div className='flex flex-col gap-2'>
        <label className='sm:text-sm text-xs font-medium'>CVV</label>
        <input 
            type="text"
            id={"text"}
            value={"***"}
            disabled
            className="w-full px-4 py-2 border border-[var(--border)] rounded outline-none sm:text-sm text-xs"
        />
    </div>
  )
}

export default InputCvv