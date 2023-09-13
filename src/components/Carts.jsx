import React from "react";
import OneCart from "../components/OneCart";

const Carts = () => {
  return (
    <div>
      <ul className="cartsList">
        <OneCart
          src={"/static/headphonesss.png"}
          text={"Apple iPhone 11 Pro 256GB Memory"}
          price={"$499.99"}
        />
        <OneCart
          src={"/static/headphonesss.png"}
          text={"Apple iPhone 11 Pro 256GB Memory"}
          price={"$499.99"}
        />
        <OneCart
          src={"/static/headphonesss.png"}
          text={"Apple iPhone 11 Pro 256GB Memory"}
          price={"$499.99"}
        />
      </ul>
    </div>
  );
};

export default Carts;
