import React from "react";

import { createContext, useState } from "react";

export const Wishlist = createContext();
export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToWishlist = (product) => {
    setItems((item) => [...item, product]);
  };

  const removeFromWishlist = (product) => {
    setItems((_items) => _items.filter(({ _id }) => product._id !== _id));
  };

  return (
    <Wishlist.Provider value={{ items, addToWishlist, removeFromWishlist }}>
      {children}
    </Wishlist.Provider>
  );
}
export default WishlistProvider;
