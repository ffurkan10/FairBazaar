"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getCartByUser, addNewCart, updateCart } from "@/lib/api";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const fetchUserCart = async (userId) => {
    const { data } = await getCartByUser(userId);
    return data.find((c) => c.userId === userId) || null;
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    if (user) {
      const syncCart = async () => {
        try {
          const { data } = await getCartByUser(user.id);
          if ((!data || data?.[0]?.products?.length === 0 || !data.length) && cart.length > 0) {
            //! Eğer user için db de sepet yoksa localStoragedaki cartı kaydet
            await addNewCart({ userId: user.id, products: cart });
            localStorage.removeItem("cart");
          } else if (data && data.length > 0) {
            //! Eğer user için db de sepet varsa onu al local e kaydet
            setCart(data[0].products);
          }
        } catch (err) {
          console.error("Sepet hatası", err);
        }
      };
      syncCart();
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //! Sepete ekleme
  const addToCart = async (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    if (user) {
      const userCart = await fetchUserCart(user.id);
      if (userCart) {
        await updateCart(userCart.id, { products: [...cart, { ...product, quantity: 1 }] });
      }
    }
  };

  //! Sepetten çıkarma
  const removeFromCart = async (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);

    if (user) {
      const userCart = await fetchUserCart(user.id);
      if (userCart) {
        await updateCart(userCart.id, { products: updated });
      }
    }
  };

  //! Miktar güncelleme
  const updateQuantity = async (id, quantity) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    setCart(updated);

    if (user) {
      const userCart = await fetchUserCart(user.id);
      if (userCart) {
        await updateCart(userCart.id, { products: updated });
      }
    }
  };

  //! Sepeti temizle
  const clearCart = async () => {
    setCart([]);

    if (user) {
      const userCart = await fetchUserCart(user.id);
      if (userCart) {
        await updateCart(userCart.id, { products: [] });
      }
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, checkout, setCheckout, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

