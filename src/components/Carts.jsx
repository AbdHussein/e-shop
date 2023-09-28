import React, { useContext } from "react";
import OneCart from "../components/OneCart";
import { CartContext } from "./providers/CartContext";

const Carts = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <ul className="cartsList">
        {cart.items &&
          cart.items.map((item) => (
            <OneCart key={item.product._id} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default Carts;
