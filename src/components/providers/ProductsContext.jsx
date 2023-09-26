import React from "react";
import { createContext, useState } from "react";

export const Products = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <Products.Provider value={{ products, setProducts }}>
      {children}
    </Products.Provider>
  );
}
export default ProductsProvider;
