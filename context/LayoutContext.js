"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
    const [activeSelect, setActiveSelect] = useState(null);

    return (
        <LayoutContext.Provider
            value={{
                activeSelect,
                setActiveSelect,
            }}
        >
        {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
  return useContext(LayoutContext);
}
