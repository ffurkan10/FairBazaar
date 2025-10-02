"use client"
import { useFavorite } from '@/context/FavoriteContext';
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({item, bg='bg-white'}) => {

    const { favorites, addToFavorites, removeFromFavorites } = useFavorite();

    const isFavorite = favorites.some(favItem => favItem.id === item.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(item.id);
        } else {
            addToFavorites(item);
        }
    };

    return (
        <div onClick={handleFavoriteClick} className={`flex justify-center rounded-lg w-12 h-12 ${bg}`}>
            {isFavorite ? 
                <FaHeart size={20} className={`mt-4 cursor-pointer text-[var(--button-bg)]`} /> 
                :
                <FaRegHeart size={20} className={`mt-4 cursor-pointer text-[var(--button-bg)]`} />
            }
        </div>
  )
}

export default FavoriteButton