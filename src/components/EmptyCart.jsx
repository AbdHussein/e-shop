import { Typography } from "@mui/material";
import React from "react";

const EmptyCart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "35px",
        gap: "25px",
      }}
    >
      <Typography variant="body1" fontWeight="400" letterSpacing="0.64px">
        Your shopping cart is empty
      </Typography>
      <img src="/static/EmptyCart.png" alt="" />
    </div>
  );
};

export default EmptyCart;
