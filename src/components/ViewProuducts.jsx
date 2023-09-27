import React, { useContext } from "react";
import Grid from "@mui/material/Grid";

import ProductCard from "./ProductCard";
import Divider from "@mui/material/Divider";
import { Products } from "./providers/ProductsContext";

const ViewProuducts = () => {
  const { top3Products } = useContext(Products);

  return (
    <div>
      <Grid
        container
        sx={{
          border: "1px solid #FCDD06",
          borderRadius: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {top3Products.map((Top3Product) => (
          <Grid key={Top3Product._id} item xs={4}>
            <ProductCard product={Top3Product} />
            <Divider orientation="vertical" flexItem />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewProuducts;
