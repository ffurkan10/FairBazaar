import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-10">
        <div className='container flex justify-between items-center'>
            <p className='text-gray-500 py-4'>© 2025 FairBazaar. All rights reserved.</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-gray-700'>
                <FaGithub className='inline-block' color='#007aff' size={25} />
            </a>
        </div>
    </footer>
  )
}

export default Footer