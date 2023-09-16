import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextBox from "./styled/TextBox";
import ImgSlider from "./styled/ImgSlider";
import ShopBtn from "./styled/ShopBtn";
import "swiper/swiper.css";
import "swiper/swiper-element.css";
import "swiper/swiper-bundle.css";

const HomeSlider = () => {
  return (
    <Swiper
      className="grey"
      height="100vh"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Grid
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Grid item xs={6}>
            <TextBox>
              <Typography variant="h1">Save up to $39.99</Typography>
              <Typography variant="h6">PlayStation 5</Typography>
              <Typography variant="h1" className="AddWidth">
                Lightning-fast download speed with super-fast SSD storage
              </Typography>
              <ShopBtn>
                <Button
                  variant="contained"
                  color="primary"
                  href="#outlined-buttons"
                >
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
      <SwiperSlide>
        <Grid
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid item xs={6}>
            <TextBox>
              <Typography variant="h1">Save up to $49.99</Typography>
              <Typography variant="h6">APPLE AIRPODS</Typography>
              <Typography variant="h1" className="AddWidth">
                AirPods are the best-selling headphones in the world
              </Typography>
              <ShopBtn>
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
              </ShopBtn>
            </TextBox>
          </Grid>
          <Grid item xs={6}>
            <ImgSlider>
              <img src="/static/img12.PNG" alt="" />
            </ImgSlider>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid item xs={6}>
            <TextBox>
              <Typography variant="h1">Save up to $99.99</Typography>
              <Typography variant="h6">iPhone 11 PRO</Typography>
              <Typography variant="h1" className="AddWidth">
                Pro cameras.Pro display. Pro performance.
              </Typography>
              <ShopBtn>
                <Button
                  variant="contained"
                  color="primary"
                  href="#outlined-buttons"
                >
                  Shop Now
                </Button>
              </ShopBtn>
            </TextBox>
          </Grid>
          <Grid item xs={6}>
            <ImgSlider>
              <img src="/static/img13.PNG" alt="" />
            </ImgSlider>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
