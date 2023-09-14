import { Box, Grid } from "@mui/material";
import React from "react";
import ImgBox from "./styled/ImgBox";
import styled from "styled-components";
import SmallImgBox from "./styled/SmallImgBox";

const SideImgs = ({ src1, src2, src3, src }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ImgBox
        sx={{
          background: "#ffff",
          borderRadius: "0px",
          width: "350px",
          height: "350px",
        }}
      >
        <img
          src={src}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ padding: "30px" }}
        />
      </ImgBox>
      <Grid container sx={{ gap: "20px", flexWrap: "nowrap" }}>
        <SmallImgBox>
          <img src={src1} alt="" width={"100%"} height={"140px"} />
        </SmallImgBox>

        <SmallImgBox>
          <img
            src={src2}
            alt=""
            width={"100%"}
            height={"140px"}
            style={{ padding: "20px" }}
          />
        </SmallImgBox>

        <SmallImgBox>
          <img
            src={src3}
            alt=""
            width={"100%"}
            height={"140px"}
            style={{ padding: "20px" }}
          />
        </SmallImgBox>
      </Grid>
    </Box>
  );
};

export default SideImgs;
