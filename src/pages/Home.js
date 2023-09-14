import React from "react";
import Category from "../components/Category";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SectionHeading from "../components/styled/SectionHeading";
import YellowSpan from "../components/styled/YellowSpan";
import HomeSlider from "../components/HomeSlider";
import ProductCard from "../components/ProductCard";
import FeaturedProducts from "../components/FeaturedProducts";
const Home = () => {
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
              <Grid item xs={3}>
                <Category src={"/static/laptop.png"} text={"LAPTOP"} />
              </Grid>
              <Grid item xs={3}>
                <Category src={"/static/pc.png"} text={"COMPUTER COMPONENTS"} />
              </Grid>
              <Grid item xs={3}>
                <Category src={"/static/phones.png"} text={"DEVICES"} />
              </Grid>
              <Grid item xs={3}>
                <Category src={"/static/img4.PNG"} text={"ACCESSORIES"} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
     <FeaturedProducts/>
      <section className="TopRateProducte">
        <Container>
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: "10px" }}>
              TOP RATE PRODUCTS
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: "43px" }} />

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
        </Container>
      </section>
    </>
  );
};

export default Home;
