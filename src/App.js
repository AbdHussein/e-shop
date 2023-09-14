import React from "react";
import NavApp from "./components/NavApp";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SideImgs from "./components/SideImgs";
import Product from "./pages/Product";
import DetailsUL from "./components/DetailsTable";
import { Grid } from "@mui/material";
function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Product" element={ <Product/>}/>
      </Routes>


    </>
  );
}

export default App;
