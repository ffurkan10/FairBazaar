"use client"
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useFavorite } from '@/context/FavoriteContext';
import React from 'react'

const LogoutButton = () => {
    const { logoutUser } = useAuth();
    const { setCart } = useCart();
    const { setFavorites } = useFavorite();

    const handleLogout =  () => {
        logoutUser();
        setCart([]);
        setFavorites([]);
    };

  return (
    <button onClick={handleLogout} className='bg-[var(--red)] w-[150px] text-white sm:text-sm text-xs font-semibold py-2 px-4 rounded-lg cursor-pointer'>
        Sign Out
    </button>
  )
}

export default LogoutButton