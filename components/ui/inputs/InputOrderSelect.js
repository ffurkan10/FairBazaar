"use client"
import { useLayout } from '@/context/LayoutContext';
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const InputOrderSelect = ({data, setData, name, width, labelText, initialOptions}) => {

    const [options, setOptions] = useState([])
    const {activeSelect, setActiveSelect} = useLayout();

    useEffect(()=>{
        setOptions(initialOptions)
    },[initialOptions])

    const handleOptionClick = (item) => {
        setActiveSelect("")
        setData(item)
    }

  return (
    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-2 relative" style={{width: width || '100%'}}>
        <label htmlFor={name} className="text-sm font-semibold mr-2">{labelText}</label>
        <div
            className="w-full border h-[45px] border-[var(--border)] rounded-lg p-2 w-full flex justify-between items-center cursor-pointer"
            onClick={() => setActiveSelect((activeSelect && activeSelect === name) ? "" : name)}
        >
            <span className="text-sm font-medium">{data || ""}</span>
            <FaChevronRight className={`transition-transform duration-300 ${activeSelect === name ? "rotate-90" : ""}`} />
        </div>
        {
          activeSelect === name &&
          <div className="absolute top-full left-0 right-0 bg-white border border-[var(--border)] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {
              options.map((item) => (
                <div key={item.id} className="w-full py-2 px-4 text-sm font-medium cursor-pointer hover:bg-[var(--background)]" onClick={() => handleOptionClick(item)}>
                    {item.orderId}
                </div>
              ))
            }
          </div>
        }
    </div>
  )
}

export default InputOrderSelect