"use client";
import { getProducts } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const filters = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
        id: 0,
        name: "all",
        title: "All Products"
    });
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        filters,
        selectedFilter,
        setSelectedFilter,
        filteredProducts,
        setFilteredProducts,
        setProducts,
        products,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
