import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import SectionHeading from "./styled/SectionHeading";
import { Container, Divider, Grid, Typography } from "@mui/material";
import YellowSpan from "./styled/YellowSpan";
import ProductCard from "./ProductCard";

const Search = () => {
  return (
    <>
      <section
        className="Featured-Products"
        style={{
          backgroundColor: "#F7F8FC",
          padding: "20px 0px",
          height: "100vh",
        }}
      >
        <Container>
          <SectionHeading sx={{ alignItems: "center" }}>
            <Typography variant="h2" sx={{ marginBottom: "10px" }}>
              Featured Products
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: "43px" }} />
          <Grid container spacing={3} sx={{ flexWrap: "nowrap", gap: "10px" }}>
            <Grid item xs={4}>
              <ProductCard
                src={"/static/img13.png"}
                text={"Apple iPhone 11 Pro 256GB Memory"}
                price={"$499.99"}
              ></ProductCard>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Search;
