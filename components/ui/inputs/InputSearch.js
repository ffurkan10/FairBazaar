"use client"
import { useProduct } from '@/context/ProductContext';
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import Link from 'next/link';

const InputSearch = () => {

    const { products } = useProduct()
    const [data, setData] = useState("");
    const [options, setOptions] = useState([])

    const handleSearch = (value) => {
        setData(value)
        if (!value) return setOptions([])

        const filtered = products.filter(item => item.title.toLowerCase().startsWith(value.toLowerCase()))
        setOptions(filtered)
    }

  return (
    <div className='flex flex-col gap-2 w-[300px] relative text-black'>
        <IoIosSearch size={25} className="text-[var(--light-text)] absolute left-2 top-[5px]"/>
        
        <input 
            type="text"
            id={"text"}
            onChange={(e) => handleSearch(e.target.value)}
            value={data || ""}
            placeholder='Search clothes, brands or tips...'
            className="w-full px-10 py-2 text-black rounded-lg outline-none sm:text-sm text-xs bg-white"
        />

        {data.length > 0 && 
            <CgClose size={20} className="text-[var(--light-text)] absolute right-2 top-[8px] cursor-pointer hover:text-[var(--primary)] transition" onClick={() => {setData(""); setOptions([])}} />
        }

        {  options.length > 0 &&
          <div className="absolute top-full left-0 right-0 bg-white border border-[var(--border)] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {options.map(item => (
              <Link onClick={() => {setData(""); setOptions([])}} href={`/products/${item.id}`} key={item.id} className="block p-2 hover:bg-[var(--light-text)] transition-colors text-sm cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
        }

        { data && options.length === 0 &&
          <div className="absolute top-full left-0 right-0 bg-white border border-[var(--border)] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-2 text-sm">No results found</div>
          </div>
        }
    </div>
  )
}

export default InputSearch