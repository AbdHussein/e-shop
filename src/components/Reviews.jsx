import React from "react";
import Review from "./Review";
import { Box, Typography } from "@mui/material";

export const Reviews = ({ Review }) => {
  return (
    <>
      <Typography variant="h2">Reviews</Typography>
      <Box
        sx={{
          border: "1px solid #BCBCBC",
          padding: "25px",
          borderRadius: "2px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {Review &&
          Review.map((review) => (
            <Review
              user={review.name}
              date={review.createdAt}
              comment={review.comment}
              rate={review.rating}
            />
          ))}
      </Box>
    </>
  );
};

export default Reviews;
