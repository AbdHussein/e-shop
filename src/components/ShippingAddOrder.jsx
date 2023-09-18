import Typography from "@mui/material/Typography";
import React from "react";

const ShippingAddOrder = ({ name, address }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h4" fontWeight="800">
        Shipping Address
      </Typography>

      <Typography variant="h3">{name}</Typography>

      <Typography variant="h1" sx={{ width: "250px" }}>
        {address}
      </Typography>
    </div>
  );
};

export default ShippingAddOrder;
