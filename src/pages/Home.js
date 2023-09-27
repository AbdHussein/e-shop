import React, { useContext, useEffect } from "react";
import Category from "../components/Category";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SectionHeading from "../components/styled/SectionHeading";
import YellowSpan from "../components/styled/YellowSpan";
import HomeSlider from "../components/HomeSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import ViewProuducts from "../components/ViewProuducts";
import { Products } from "../components/providers/ProductsContext";
import api from "../api";
import { async } from "q";

const Home = () => {
  const { products, setProducts, setCategories, categories } = useContext(
    Products
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/api/products");

        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await api.get("/api/products/category/all");
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, []);

  console.log({ products });

  return (
    <>
      <section className="ShopSlider">
        <HomeSlider />
      </section>

      <section className="Featured Categories">
        <Container>
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: "10px" }}>
              Featured Categories
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: "43px" }} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {categories.slice(0, 4).map((categoryItem) => (
                <Grid key={categoryItem.name} item xs={3}>
                  <Category categoryInfo={categoryItem} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
      <section
        className="Featured-Products"
        style={{ backgroundColor: "#F7F8FC", padding: "20px 0px" }}
      >
        <FeaturedProducts />
      </section>

      <section className="TopRateProducte">
        <Container>
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: "10px" }}>
              TOP RATE PRODUCTS
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: "43px" }} />
          <ViewProuducts />
        </Container>
      </section>
    </>
  );
};

export default Home;
