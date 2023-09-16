import React from "react";
import Review from "./Review";
import { Box, Typography } from "@mui/material";

export const Reviews = () => {
  return (
    <>
      <Typography variant="h2">Reviews</Typography>
      <Box
        sx={{
          border: "1px solid #BCBCBC",
          padding: "25px",
          borderRadius: "2px",
          marginTop: "20px",
        }}
      >
        <Review user={"adva"} date={"25/12/2001"} comment={"schasgchsbacas"} />
      </Box>
    </>
  );
};

export default Reviews;
