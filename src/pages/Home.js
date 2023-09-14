import React from "react";
import Category from "../components/Category";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SectionHeading from "../components/styled/SectionHeading";
import YellowSpan from "../components/styled/YellowSpan";
import HomeSlider from "../components/HomeSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import ViewProuducts from '../components/ViewProuducts';

const Home = () => {
  return (
    <>
      <section className="ShopSlider">
        <HomeSlider />
      </section>

      <section className="Featured Categories">
        <Container>
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Featured Categories
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: '43px' }} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Category src={'/static/laptop.png'} text={'LAPTOP'} />
              </Grid>
              <Grid item xs={3}>
                <Category src={'/static/pc.png'} text={'COMPUTER COMPONENTS'} />
              </Grid>
              <Grid item xs={3}>
                <Category src={'/static/phones.png'} text={'DEVICES'} />
              </Grid>
              <Grid item xs={3}>
                <Category src={'/static/img4.PNG'} text={'ACCESSORIES'} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
     <FeaturedProducts/>
      <section className="TopRateProducte">
        <Container>
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              TOP RATE PRODUCTS
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: '43px' }} />
          <ViewProuducts />
        </Container>
      </section>
    </>
  );
};

export default Home;
