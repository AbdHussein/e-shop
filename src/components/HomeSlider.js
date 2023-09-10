import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/swiper-element.css';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Box = styled("div")(({ theme }) => ({

        display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
         justifyContent: "center",
         alignItems: "center",
    
}));
const TextBox = styled("div")(({ theme }) => ({

    display: "grid", gridTemplateColumns: "repeat(1, 3fr)",
     justifyContent: "center",
     alignItems: "center",

}));

const HomeSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >


            <SwiperSlide> <Box >
             <TextBox>
              <Typography vareint="h3">Save up to $39.99</Typography>
              <Typography vareint="h2">PlayStation 5</Typography>
              <Typography vareint="h3">Lightning-fast download speed with super-fast SSD storage</Typography>
             
             </TextBox>
            </Box></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    )
}

export default HomeSlider
