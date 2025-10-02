import axios from "axios";

//! JSON Server URL
const api = axios.create({
  baseURL: "http://localhost:3001",
});

//! kullanııcı güncelle
export const updateUser = (id, data) => api.patch(`/users/${id}`, data);

//! Ürünleri getir
export const getProducts = () => api.get("/products");

//! Tek ürün
export const getProductById = (id) => api.get(`/products/${id}`);

//! Sipariş oluştur
export const addNewOrder = (order) => api.post("/orders", order);

//! Siparişleri getir
export const getOrders = () => api.get("/orders");

//! Id ye göre siparişleri getir
export const getOrdersByUser = (userId) => api.get(`/orders?userId=${userId}`);

//! Kullanıcıya ait sepeti getir
export const getCartByUser = (userId) => api.get(`/carts?userId=${userId}`);

//! Yeni sepet kaydet
export const addNewCart = (cart) => api.post("/carts", cart);

//! Kullanıcıya ait sepeti güncelle
export const updateCart = (id, cart) => api.patch(`/carts/${id}`, cart);

//! Sipariş güncelle
export const updateOrder = (id, data) => api.patch(`/orders/${id}`, data);

//! Sipariş sil
export const deleteOrder = (id) => api.delete(`/orders/${id}`);

export default api;
