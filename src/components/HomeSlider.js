import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.css";
import "swiper/swiper-element.css";
import "swiper/swiper-bundle.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const TextBox = styled("div")(({ theme }) => ({
  display: "flex",
 flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign:"left"
}));

const ImgSlider = styled("div")(({ theme }) => ({
  width: "525px",
}));

const ShopBtn = styled("div")(({ theme }) => ({
  height: "56px",
}));

const HomeSlider = () => {
  return (
    <Swiper  
    className="grey"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextBox>
              <Typography vareint="h3">Save up to $39.99</Typography>
              <Typography vareint="h2">PlayStation 5</Typography>
              <Typography vareint="h3">
                Lightning-fast download speed with super-fast SSD storage
              </Typography>
              <ShopBtn>
                <Button variant="outlined" href="#outlined-buttons">
                  Shop Now
                </Button>
              </ShopBtn>
            </TextBox>
          </Grid>
          <Grid item xs={6}>
            <ImgSlider>
              <img src="/static/img1.PNG" alt="" />
            </ImgSlider>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextBox>
              <Typography vareint="h3">Save up to $39.99</Typography>
              <Typography vareint="h2">PlayStation 5</Typography>
              <Typography vareint="h3">
                Lightning-fast download speed with super-fast SSD storage
              </Typography>
              <ShopBtn>
                <Button variant="outlined" href="#outlined-buttons">
                  Shop Now
                </Button>
              </ShopBtn>
            </TextBox>
          </Grid>
          <Grid item xs={6}>
            <ImgSlider>
              <img src="/static/img1.PNG" alt="" />
            </ImgSlider>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextBox>
              <Typography vareint="h3">Save up to $39.99</Typography>
              <Typography vareint="h2">PlayStation 5</Typography>
              <Typography vareint="h3">
                Lightning-fast download speed with super-fast SSD storage
              </Typography>
              <ShopBtn>
                <Button variant="outlined" href="#outlined-buttons">
                  Shop Now
                </Button>
              </ShopBtn>
            </TextBox>
          </Grid>
          <Grid item xs={6}>
            <ImgSlider>
              <img src="/static/img1.PNG" alt="" />
            </ImgSlider>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
