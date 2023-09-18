import Typography from "@mui/material/Typography";
import React from "react";

const OrderPayDetails = ({ Subtotal, Tax, Shipping, Total }) => {
  return (
    <div>
      <ul
        style={{
          padding: "0px",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            Subtotal
          </Typography>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            {Subtotal}
          </Typography>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            Tax
          </Typography>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            {Tax}
          </Typography>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            Shipping
          </Typography>
          <Typography variant="h1" sx={{ color: "#707070" }}>
            {Shipping}
          </Typography>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h1" fontWeight="600">
            Total
          </Typography>
          <Typography variant="h1" fontWeight="600">
            {" "}
            {Total}
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default OrderPayDetails;
