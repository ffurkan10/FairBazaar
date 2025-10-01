"use client";
import { addNewOrder } from "@/lib/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({});
  const router = useRouter();
  
  const createOrder = async (orderData) => {
    const localId = Date.now() + Math.floor(Math.random() * 1000);

    const order = {
      id: localId,
      date: new Date().toISOString(),
      status: "Order Completed",
      ...orderData,
    };

    try {
      const {data} = await addNewOrder({
        userId: order.userId,
        orderId: order.id,
        date: order.date,
        products: order.products,
        total: order.total,
        status: order.status,
      });
      setNewOrder(data);
      setOrders((prev) => [...prev, data]);
      router.push(`/checkout/${data.orderId}`);
      console.log("JSON Server tamam", data);
    } catch (err) {
      console.error("JSON Server hata", err);
    }

    return order;
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders, newOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
