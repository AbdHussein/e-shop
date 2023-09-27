import React, { useContext } from "react";
import OneCart from "../components/OneCart";
import { CartContext } from "./providers/CartContext";

const Carts = () => {
  const { cart } = useContext(CartContext);
  console.log({ cart });
  return (
    <div>
      <ul className="cartsList">
        {cart.map((item) => (
          <OneCart
            key={item.product._id}
            src={item.product.images}
            text={item.product.name}
            price={item.product.price}
            id={item.product._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carts;
