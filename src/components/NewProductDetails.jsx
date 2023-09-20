import React from "react";

import Grid from "@mui/material/Grid";

import { TextField, Typography } from "@mui/material";
const NewProductDetails = () => {
  return (
    <div>
      {" "}
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Product name
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Product Brand
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Product ID
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Product Category
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Product Description
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "728px",
                height: "90px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Count in Stock
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontSize="18px"
            fontWeight="500"
            sx={{ color: "#707070", marginBottom: "10px", marginLeft: "3px" }}
          >
            Price
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 16,
                width: "300px",
                height: "35px",
                padding: "0px",
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProductDetails;
