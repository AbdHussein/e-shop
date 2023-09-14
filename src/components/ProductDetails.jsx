import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DetailsTable from "./DetailsTable";

const ProductDetails = ({ productDetails }) => {
  const firstHalf = productDetails.slice(0, productDetails.length / 2);
  const secondHalf = productDetails.slice(productDetails.length / 2);

  return (
    <>
      <Typography variant="h2">Specification</Typography>
      <Box
        sx={{
          border: "1px solid #BCBCBC",
          padding: "25px",
          borderRadius: "2px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4">Technical Details</Typography>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <DetailsTable details={firstHalf} />
          </Grid>
          <Grid item xs={6}>
            <DetailsTable details={secondHalf} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetails;
