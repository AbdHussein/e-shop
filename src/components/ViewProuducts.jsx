import React from "react";
import Grid from "@mui/material/Grid";

import ProductCard from "./ProductCard";
import Divider from "@mui/material/Divider";

const ViewProuducts = () => {
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
        <ProductCard
          src={"/static/camera.jfif"}
          text={"Canon Eos 80D DSLR Camera"}
          price={"$799.99"}
        ></ProductCard>
        <Divider orientation="vertical" flexItem />
        <ProductCard
          src={"/static/mouse.jfif"}
          text={"Logitech G-Series Gaming Mouse"}
          price={"$49.99"}
        ></ProductCard>
        <Divider orientation="vertical" flexItem />
        <ProductCard
          src={"/static/3d-generator.jfif"}
          text={"Amazon Echo Dot 3rd Generation"}
          price={"$29.99"}
        ></ProductCard>
      </Grid>
    </div>
  );
};

export default ViewProuducts;
