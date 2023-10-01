import React from "react";
import { createContext, useState, useEffect } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
export const Products = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [top3Products, setTop3Products] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  const getData = async () => {
    try {
      const [products, topProducts, categories] = await Promise.all([
        api.get("/api/products"),
        api.get("/api/products/top"),
        api.get("/api/products/category/all"),
      ]);

      setProducts(products.data.products);
      setTop3Products(topProducts.data);
      setCategories(categories.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
        getData,
        searchProduct,
        setSearchProduct,
      }}
    >
      {children}
    </Products.Provider>
  );
}
export default ProductsProvider;
