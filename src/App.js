import React from "react";
import NavApp from "./components/NavApp";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./components/Search";
import PaymentSuccess from "./components/PaymentSuccess";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Product" element={ <Product/>}/>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
