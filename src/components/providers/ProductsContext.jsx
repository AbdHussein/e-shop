import React from "react";
import { createContext, useState } from "react";
import api from "../../api";
import { useEffect } from "react";

export const Products = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [top3Products, setTop3Products] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const [products, topProducts, categories] = await Promise.all([
          api.get("/api/products"),
          api.get("/api/products/top"),
          api.get("/api/products/category/all"),
        ]);

        setProducts(products.data.products);
        setTop3Products(topProducts.data);
        setTop3Products(categories.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <Products.Provider
      value={{
        products,
        setProducts,
        top3Products,
        setTop3Products,
        categories,
        setCategories,
      }}
    >
      {children}
    </Products.Provider>
  );
}
export default ProductsProvider;
