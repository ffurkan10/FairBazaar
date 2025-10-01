import React from 'react'

const InputDate = () => {
  return (
    <div>
        <label className='sm:text-sm text-xs font-medium'>Date of Birth</label>
        <input 
            type="text"
            id={"text"}
            value={"DD/MM/YYYY"}
            disabled
            className="w-full px-4 py-2 border border-[var(--border)] rounded outline-none sm:text-sm text-xs"
        />
    </div>
  )
}

export default InputDate