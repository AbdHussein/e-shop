import { Box, Rating, Typography } from "@mui/material";
import React from "react";

export const Review = ({ user, comment, date }) => {
  const [value, setValue] = React.useState(2);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h4">{user}</Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Rating name="read-only" value={value} readOnly />
        <span style={{ fontSize: "12px", color: "#707070" }}>{date}</span>
      </div>
      <Typography
        variant="body2"
        sx={{
          padding: "10px",
          backgroundColor: "#F2F2F2",
          borderRadius: "10px",
        }}
      >
        {comment}
      </Typography>
    </Box>
  );
};

export default Review;
