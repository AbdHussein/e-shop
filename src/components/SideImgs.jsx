import { Box, Grid } from "@mui/material";
import React from "react";
import ImgBox from "./styled/ImgBox";
import styled from "styled-components";
import SmallImgBox from "./styled/SmallImgBox";

const SideImgs = ({ src }) => {
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
          src={src && src[0]}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ padding: "30px" }}
        />
      </ImgBox>
      {src && src.length > 1 ? (
        <Grid container sx={{ gap: "20px", flexWrap: "nowrap" }}>
          {src.slice(1).map((image) => (
            <SmallImgBox>
              <img src={image} alt="" width={"100%"} height={"140px"} />
            </SmallImgBox>
          ))}
        </Grid>
      ) : null}
    </Box>
  );
};

export default SideImgs;
