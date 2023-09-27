import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import SectionHeading from "./styled/SectionHeading";
import { Container, Divider, Grid, Typography } from "@mui/material";
import YellowSpan from "./styled/YellowSpan";
import ProductCard from "./ProductCard";

const Search = () => {
  return (
    <section
      className="Featured-Products"
      style={{
        backgroundColor: "#F7F8FC",
        padding: "20px 0px",
        height: "100vh",
        marginBottom: "0px",
      }}
    >
      <FeaturedProducts />
    </section>
  );
};

export default Search;
