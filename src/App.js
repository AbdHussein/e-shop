import React from "react";
import NavApp from "./components/NavApp";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    
    </>
  );
}

export default App;
