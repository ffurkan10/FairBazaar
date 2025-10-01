import Link from 'next/link'
import React from 'react'

const LinkButton = ({ text, handleClick, width, href }) => {
    return (
        <Link 
            href={href} 
            onClick={handleClick} 
            className={`bg-[var(--button-bg)] block text-center sm:text-sm text-xs text-white p-2 rounded-md hover:bg-[var(--hover-primary)] transition-colors duration-200 cursor-pointer ${width ? width : ''}`}>
            {text}
        </Link>
    )
}

export default LinkButton