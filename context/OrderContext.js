"use client";
import { addNewOrder, getOrdersByUser, updateOrder } from "@/lib/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useModal } from "./ModalContext";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({});
  const router = useRouter();
  const {user} = useAuth()
  const {setResultModalData, showModal} = useModal()
  
  //! sipariş oluşturma
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

  //! sipariş silme
  const removeProductFromOrder = async (orderId, productId) => {
    try {
      const order = orders.find((o) => o.id === orderId);
      if (!order) return;

      const updatedProducts = order.products.filter((p) => p.id !== productId);

      const updatedTotal = updatedProducts.reduce(
        (acc, p) => acc + p.price * (p.quantity || 1),
        0
      );

      const updatedOrder = {
        ...order,
        products: updatedProducts,
        total: updatedTotal,
      };

      const { data } = await updateOrder(orderId, updatedOrder);

      setResultModalData({
        resultType: "success",
        message: "Product deleted from order successfully!",
        link: ""
      });
      showModal("result");

      setOrders((prev) => prev.map((o) => (o.id === orderId ? data : o)));

      return data;
    } catch (err) {
      console.error("Ürün silme hatası:", err);
    }
  };

  //! siparişe yeni ürün ekleme
  const addProductToOrder = async (orderId, product) => {
    try {
      const order = orders.find((o) => o.id === orderId);
      if (!order) return;

      const existingProduct = order.products.find((p) => p.id === product.id);

      let updatedProducts;
      if (existingProduct) {
        updatedProducts = order.products.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) }
            : p
        );
      } else {
        updatedProducts = [...order.products, { ...product, quantity: product.quantity || 1 }];
      }

      const updatedTotal = updatedProducts.reduce(
        (acc, p) => acc + p.price * (p.quantity || 1),
        0
      );

      const updatedOrder = {
        ...order,
        products: updatedProducts,
        total: updatedTotal,
      };

      const { data } = await updateOrder(orderId, updatedOrder);

      setResultModalData({
        resultType: "success",
        message: "Product added to order successfully!",
        link: ""
      });
      showModal("result")

      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? data : o))
      );

      return data;
    } catch (err) {
      console.error("Ürün ekleme hatası:", err);
    }
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
    <OrderContext.Provider value={{ orders, setOrders, newOrder, createOrder, removeProductFromOrder, addProductToOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
