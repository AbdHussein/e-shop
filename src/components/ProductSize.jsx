import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import React from "react";

import SizeButton from "./styled/SizeButton";

export const ProductSize = ({ size }) => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "20px", color: "#BCBCBC", marginBottom: "10px" }}
      >
        Size:
        <span style={{ marginLeft: "5px", fontSize: "20px", color: "#242424" }}>
          {size}
        </span>
      </Typography>
      <ButtonGroup sx={{ gap: "15px" }}>
        <SizeButton>{size}</SizeButton>
        <SizeButton>{size}</SizeButton>
        <SizeButton>{size}</SizeButton>
      </ButtonGroup>
    </Box>
  );
};

export default ProductSize;
