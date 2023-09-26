import React from "react";
import NavApp from "./components/NavApp";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payments from "./pages/Payments";
import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./components/Search";
import PaymentSuccess from "./components/PaymentSuccess";
import CreateProduct from "./pages/CreateProduct";
import Products from "./pages/Products";
import Account from "./pages/Account";
import WishlistProvider from "./components/providers/WishlistContext"
import ProductsProvider from "./components/providers/ProductsContext"

function App() {
  return (
    <ProductsProvider>
      <WishlistProvider>
          <NavApp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/CreateProduct" element={<CreateProduct />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Account" element={<Account />} />
          </Routes>
      </WishlistProvider>
    </ProductsProvider>
  );
}

export default App;
