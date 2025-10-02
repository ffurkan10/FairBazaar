import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumbs = ({ data }) => {
  return (
    <div className='flex gap-2 pt-6 sm:pb-12 pb-8'>
      {data.map((item, index) => {
        const isLast = index === data.length - 1

        return (
          <div className='flex items-center gap-2' key={index}>
            {isLast ? (
              <p className={`inline max-w-[200px] truncate text-sm font-semibold`}>{item.label}</p>
            ) : (
              <Link className={`inline text-sm font-light`} href={item.href}>{item.label}</Link>
            )}
            {!isLast && <FaChevronRight size={14} />}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs