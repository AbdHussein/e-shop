import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import OrderDetails from "./OrderDetails";
import OrderPayDetails from "./OrderPayDetails";
import { Button } from "@mui/material";
const ShipOrderDetails = () => {
  return (
    <div
      style={{
        background: "#F2F2F2",
        padding: "25px",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h4" fontWeight="800" sx={{ margin: "20px 0px" }}>
        Order Details
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item xs={3}>
          <OrderDetails
            src={"/static/headphonesss.png"}
            name={"iPhone 11 Pro 256GB Memory"}
            price={"$499.99"}
            count={"1"}
            total={"$499.99"}
          />
        </Grid>

        <Grid item xs={3}>
          <OrderDetails
            src={"/static/headphonesss.png"}
            name={"iPhone 11 Pro 256GB Memory"}
            price={"$499.99"}
            count={"1"}
            total={"$499.99"}
          />
        </Grid>

        <Grid item xs={3}>
          <OrderPayDetails
            Subtotal={"$589.98"}
            Tax={"$2.53"}
            Shipping={"$0.00"}
            Total={"$592.51"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShipOrderDetails;
