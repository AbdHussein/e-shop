import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import ColorBtn from "./styled/ColorBtn";

export const ProductColor = ({ color }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: "20px", color: "#BCBCBC" }}>
        Color:
        <span style={{ marginLeft: "5px", fontSize: "20px", color: "#242424" }}>
          {color}
        </span>
      </Typography>
      <ButtonGroup sx={{ display: "flex", gap: "20px" }}>
        <ColorBtn
          style={{
            backgroundColor: "pink",
          }}
        />
        <ColorBtn
          style={{
            backgroundColor: "#EDEAE3",
          }}
        />
        <ColorBtn
          style={{
            backgroundColor: "#707070",
          }}
        />
      </ButtonGroup>
    </Box>
  );
};

export default ProductColor;
