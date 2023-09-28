import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import ColorBtn from "./styled/ColorBtn";

export const ProductColor = ({ colors }) => {
  const [color, setColor] = useState();
  return (
    <Box>
      <Typography sx={{ fontSize: "20px", color: "#BCBCBC" }}>
        Color:
        <span style={{ marginLeft: "5px", fontSize: "20px", color: "#242424" }}>
          {color}
        </span>
      </Typography>

      <ButtonGroup
        sx={{ display: "flex", gap: "20px", flexDirection: "row !important" }}
      >
        {colors.map((bgColor) => (
          <ColorBtn
            onClick={() => {
              setColor(bgColor);
            }}
            style={{
              backgroundColor: bgColor,
            }}
          />
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ProductColor;
