import { TextField, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

const ShippingAddress = () => {
  return (
    <div style={{ width: "625px" }}>
      <Typography variant="h4" fontWeight="800">
        Shipping Address
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "35px 15px",
          marginTop: "20px",
        }}
      >
        <Grid item xs={2}>
          <Typography
            variant="h3"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Country
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "48px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="h3"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            City
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "48px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="h3"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Zip Code
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "48px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="h3"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Street Address
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "48px",
                padding: "0px",
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingAddress;
