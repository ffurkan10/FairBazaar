import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const InputPassword = ({data, setData, name, labelText, type, handleClick}) => {
  return (
    <div className='flex flex-col gap-2 relative'>
        <label className='sm:text-sm text-xs font-medium'>{labelText}</label>
        <input 
            type={type}
            id={"text"}
            onChange={setData}
            value={data || ""}
            name={name} 
            className="w-full px-4 py-2 border border-[var(--border)] rounded outline-none sm:text-sm text-xs"
        />
        <div className='absolute right-3 sm:top-9 top-8 cursor-pointer'>
            {type === "password" ? <IoEyeOutline onClick={handleClick} size={20} /> : <IoEyeOffOutline onClick={handleClick} size={20} />}
        </div>
    </div>
  )
}

export default InputPassword