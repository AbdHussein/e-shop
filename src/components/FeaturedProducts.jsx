import React from "react";
import SectionHeading from "./styled/SectionHeading";
import { Container, Divider, Grid, Typography } from "@mui/material";

import ProductCard from "./ProductCard";
import YellowSpan from "./styled/YellowSpan";

export const FeaturedProducts = () => {
  return (
    <section
      className="Featured-Products"
      style={{ backgroundColor: "#F7F8FC", padding: "20px 0px" }}
    >
      <Container>
        <SectionHeading sx={{ alignItems: "center" }}>
          <Typography variant="h2" sx={{ marginBottom: "10px" }}>
            Featured Products
          </Typography>
          <YellowSpan></YellowSpan>
        </SectionHeading>
        <Divider sx={{ marginBottom: "43px" }} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ProductCard
              src={"/static/img13.png"}
              text={"Apple iPhone 11 Pro 256GB Memory"}
              price={"$499.99"}
            ></ProductCard>
          </Grid>
          <Grid item xs={4}>
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
