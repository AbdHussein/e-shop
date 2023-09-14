import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import Category from '../components/Category';
import HomeSlider from '../components/HomeSlider';
import ProductCard from '../components/ProductCard';
import ViewProuducts from '../components/ViewProuducts';
import SectionHeading from '../components/styled/SectionHeading';
import YellowSpan from '../components/styled/YellowSpan';

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
      <section
        className="Featured-Products"
        style={{ backgroundColor: '#F7F8FC' }}
      >
        <Container>
          <SectionHeading sx={{ alignItems: 'center' }}>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Featured Products
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: '43px' }} />
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ProductCard
                src={'/static/img13.png'}
                text={'Apple iPhone 11 Pro 256GB Memory'}
                price={'$499.99'}
              ></ProductCard>
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                src={'/static/headphones.png'}
                text={'Apple Airpods Wireless Bluetooth Headset'}
                price={'$99.99'}
              ></ProductCard>
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                src={'/static/img1.png'}
                text={'Sony Playstation 4 Pro White Version'}
                price={'$399.99'}
              ></ProductCard>
            </Grid>
          </Grid>
        </Container>
      </section>
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
