import { Box, Button, Typography } from "@mui/material";
import { BiPlus, BiMinus } from "react-icons/bi";

import React, { useState } from "react";
import IconButton from "./styled/IconButton";

export const Counter = ({ count, setCount }) => {
  const IncNum = () => {
    setCount((count) => count + 1);
  };

  const DecNum = () => {
    setCount((count) => count - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #F2F2F2",
        width: "200px",
        borderRadius: "0px",
      }}
    >
      <IconButton
        onClick={DecNum}
        disabled={count === 0}
        sx={{
          width: "20px",
          border: "1px solid #FCDD06",
          height: "60px",
          borderRadius: "0px !important",
        }}
      >
        <BiMinus />
      </IconButton>

      <Typography>{count}</Typography>
      <IconButton
        onClick={IncNum}
        sx={{
          width: "20px",
          border: "1px solid #FCDD06",
          height: "60px",
          borderRadius: "0px !important",
        }}
      >
        <BiPlus />
      </IconButton>
    </Box>
  );
};

export default Counter;
