import React, { useContext, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import SectionHeading from "./styled/SectionHeading";
import { Container, Divider, Grid, Typography } from "@mui/material";
import YellowSpan from "./styled/YellowSpan";
import ProductCard from "./ProductCard";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import api from "../api";
import { Products } from "./providers/ProductsContext";

const Search = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { setSearchProduct } = useContext(Products);

  useEffect(() => {
    setLoading(true);
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q");

    const getData = async (keyword) => {
      const response = await api.get("/api/products", {
        params: {
          keyword: keyword,
        },
      });

      setSearchProduct(response.data.products);
      setLoading(false);
    };
    getData(q);
  }, [location.search]);

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
      {loading ? "Loading..." : <FeaturedProducts isInSearch={true} />}
    </section>
  );
};

export default Search;
