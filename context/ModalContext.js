"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalType, setModalType] = useState(null);
    const [modalLocation, setModalLocation] = useState(null);
    const [resultModalData, setResultModalData] = useState(null);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setModalType(null);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const showModal = (type) => {
        setModalType(type);
        setModalLocation(window.location.pathname);
    }

    const closeAllModals = () => {
        setModalType(null);
    }

    return (
        <ModalContext.Provider
            value={{
                modalType,
                setModalType,
                modalLocation,
                setModalLocation,
                showModal,
                closeAllModals,
                resultModalData,
                setResultModalData,
            }}
        >
        {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
  return useContext(ModalContext);
}
