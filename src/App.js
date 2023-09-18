import React from "react";
import NavApp from "./components/NavApp";
import { Route, Routes } from "react-router";


import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Payments from "./pages/Payments";


function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Payments" element={<Payments />} />
      </Routes>


    </>
  );
}

export default App;
