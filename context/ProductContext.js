"use client";
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
