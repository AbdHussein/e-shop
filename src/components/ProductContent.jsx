import { Box, Typography } from "@mui/material";
import Counter from "./Counter";
import React from "react";
import styled from "styled-components";
import ProductColor from "./ProductColor";
import ProductTitle from "./styled/ProductTitle";
import ProductSize from "./ProductSize";
import DivButtons from "./styled/DivButtons";
import AddingButton from "./styled/AddingButton";
import { FaRegBookmark } from "react-icons/fa";
import IconButton from "./styled/IconButton";

export const ProductContent = ({ title, price, discription }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <ProductTitle>
          <Typography variant="h2" sx={{ fontSize: "25px" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "25px" }}>
            {price}
          </Typography>
        </ProductTitle>

        <Counter />
        <ProductColor color={"silver"} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "60px",
          }}
        >
          <ProductSize />
          <DivButtons>
            <IconButton
              sx={{
                minWidth: "30px !important",
                height: "40px !important",
                borderRadius: "5px !important",
                border: "1px solid #FCDD06 !important",
                backgroundColor: "#fff !important",
              }}
            >
              <FaRegBookmark />
            </IconButton>

            <AddingButton
              sx={{
                backgroundColor: "#FCDD06 !important",
                borderRadius: "5px !important",
              }}
            >
              Add to cart
            </AddingButton>
          </DivButtons>
        </div>
        <div>
          <Typography variant="body2">{discription}</Typography>
        </div>
      </Box>
    </>
  );
};

export default ProductContent;
