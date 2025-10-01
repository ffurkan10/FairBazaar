import React from 'react'

const InputMail = ({data, setData, name, labelText}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label className='sm:text-sm text-xs font-medium'>{labelText}</label>
        <input 
            type="email"
            id={"text"}
            onChange={setData}
            value={data || ""}
            name={name} 
            className="w-full px-4 py-2 border border-[var(--border)] rounded outline-none sm:text-sm text-xs"
        />
    </div>
  )
}

export default InputMail