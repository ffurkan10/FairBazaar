"use client";
import { updateUser } from "@/lib/api";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  //! LocalStorage persist
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const syncFavorites = async () => {
      if (!user) return;
      try {
        //! Kullanıcının favorileri yoksa localden alıp apiye kaydetme yeri
        if ((!user.favorites || user.favorites.length === 0) && favorites.length > 0) {
          await updateUser(user.id, { favorites });
        } else {
          //! Kullanıcının favorileri varsa api den alıp local e kaydetme yeri
          setFavorites(user.favorites);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    syncFavorites();
  }, [user]);

  const addToFavorites = async (product) => {
    const updated = [...favorites, product];
    setFavorites(updated);

    if (user) {
      await updateUser(user.id, { favorites: updated });
    }
  };

  //! Favorilerden çıkarma
  const removeFromFavorites = async (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);

    if (user) {
      await updateUser(user.id, { favorites: updated });
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}