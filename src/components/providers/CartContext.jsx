import React, { useEffect } from "react";
import { async } from "q";
import { createContext, useState } from "react";
import api from "../../api";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = async (productId) => {
    try {
      const response = await api.put("/api/users/profile/cart", {
        productId,
        qty: 1,
      });

      setCart(response.data.cart.items);
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromcart = async (productId) => {
    try {
      console.log({ productId });
      const response = await api.delete(
        `/api/users/profile/cart?productId=${productId}`
      );
      setCart(response.data.cart.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getCart = async () => {
      const response = await api.get("/api/users/profile");
      setCart(response.data.cart.items);
    };
    getCart();
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromcart }}>
      {children}
    </CartContext.Provider>
  );
}
