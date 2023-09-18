import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
const OrderDetails = ({ src, name, price, count, total, line }) => {
  const setdivider = () => {
    if ({ line }) {
      return (
        <Divider
          sx={{
            height: "15px",
            fontSize: "50px",

            marginBottom: "20px",
          }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <Grid item xs={3}>
          <img src={src} alt="" style={{ width: "85%" }} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", flexDirection: "column", gap: "60px" }}
        >
          <Typography variant="h1" sx={{ color: "#707070" }}>
            {name}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <Typography variant="h1" sx={{ color: "#707070" }}>
              {" "}
              {price} X {count}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#707070",
              }}
            >
              {total}
            </Typography>
          </div>
        </Grid>
      </Grid>
      {setdivider({ line })}
    </div>
  );
};

export default OrderDetails;
