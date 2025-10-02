import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import React from 'react'
import { FaRegHeart, FaRegUser } from 'react-icons/fa';

const NavMobile = ({showMenu, setShowMenu}) => {
    const { user } = useAuth();

    return (
        <div className={`fixed inset-0 z-40 flex justify-start transition-opacity duration-300 ease-out
            ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

            <div className="flex-1 bg-black/40 transition-opacity duration-300 ease-out" onClick={() => setShowMenu(false)} />

            <div className={`absolute right-0 top-[75px] w-[280px] rounded-bl-xl h-fit bg-[#091422f2] p-4 shadow-xl transform transition-transform duration-300 ease-out ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex flex-col'>
                    <Link onClick={() => setShowMenu(false)} href="/products" className="text-white border-b border-white pb-4 mb-4">
                        Products
                    </Link>
                    {user ? (
                        <div className='flex flex-col gap-4'>
                            <Link onClick={() => setShowMenu(false)} href="/favorites" className="flex items-center rounded-lg gap-2">
                                <FaRegHeart size={20} />
                                <div className="flex flex-col">
                                    <p className="text-xs font-light opacity-80">Your</p>
                                    <p className="text-sm font-semibold">Lists</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href="/profile" className="flex items-center rounded-lg gap-2">
                                <FaRegUser size={20} />
                                <div className="flex flex-col">
                                    <p className="text-xs font-light opacity-80">Your</p>
                                    <p className="text-sm font-semibold">Account</p>
                                </div>
                            </Link>
                        </div>
                    ): (
                        <Link
                            onClick={() => setShowMenu(false)}
                            href="/login"
                            className="flex items-center rounded-lg gap-2"
                        >
                        <FaRegUser size={20} />
                            <div className="flex flex-col">
                                <p className="text-xs font-light opacity-80">Sign In</p>
                                <p className="text-sm font-semibold">Account</p>
                            </div>
                        </Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default NavMobile