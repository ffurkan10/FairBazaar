import React from 'react'

const Button = ({ text, handleClick, width, type="button" }) => {
  return (
        <button onClick={handleClick} type={type} className={`bg-[var(--button-bg)] sm:text-sm text-xs text-white p-2 rounded-md hover:bg-[var(--hover-primary)] transition-colors duration-200 cursor-pointer ${width ? width : ''}`}>{text}</button>
  )
}

export default Button