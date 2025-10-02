"use client";
import { addNewOrder, getOrdersByUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({});
  const router = useRouter();
  const {user} = useAuth()
  
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

  useEffect(() => {
      if(!user) return;
      const fetchOrders = async () => {
          try {
              const {data} = await getOrdersByUser(user?.id);
              setOrders(data);
          } catch (error) {
              console.error('Error fetching orders:', error);
          }
      };

      fetchOrders();
  }, [user])

  return (
    <OrderContext.Provider value={{ orders, setOrders, newOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
