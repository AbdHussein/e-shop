import React, { useContext } from "react";
import SectionHeading from "./styled/SectionHeading";
import { Container, Divider, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import YellowSpan from "./styled/YellowSpan";
import { Products } from "./providers/ProductsContext";

export const FeaturedProducts = () => {
  const { products } = useContext(Products);
  return (
    <Container>
      <SectionHeading sx={{ alignItems: "center" }}>
        <Typography variant="h2" sx={{ marginBottom: "10px" }}>
          Featured Products
        </Typography>
        <YellowSpan></YellowSpan>
      </SectionHeading>
      <Divider sx={{ marginBottom: "43px" }} />
      <Grid container spacing={3} sx={{ flexWrap: "nowrap", gap: "10px" }}>
        {products.slice(0, 3).map((product) => (
          <Grid key={product._id} item xs={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
        {/* <Grid item xs={4}>
          <ProductCard
            src={"/static/headphones.png"}
            text={"Apple Airpods Wireless Bluetooth Headset"}
            price={"$99.99"}
          ></ProductCard>
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            src={"/static/img1.png"}
            text={"Sony Playstation 4 Pro White Version"}
            price={"$399.99"}
          ></ProductCard>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
