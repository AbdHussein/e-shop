import { Box, Typography } from "@mui/material";
import Counter from "./Counter";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductColor from "./ProductColor";
import ProductTitle from "./styled/ProductTitle";
import ProductSize from "./ProductSize";
import DivButtons from "./styled/DivButtons";
import AddingButton from "./styled/AddingButton";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import IconButton from "./styled/IconButton";
import { CartContext } from "./providers/CartContext";
import { Products } from "./providers/ProductsContext";
import { Wishlist } from "./providers/WishlistContext";

export const ProductContent = ({ productDetails, isInCart }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { items, addToWishlist, removeFromWishlist } = useContext(Wishlist);
  const handleAddToCart = () => {
    addToCart(productDetails._id, count);
  };
  const isInWishlist = items.find(({ _id }) => productDetails._id === _id);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <ProductTitle>
          <Typography variant="h2" sx={{ fontSize: "25px" }}>
            {productDetails.name}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "25px" }}>
            {`$${productDetails.price}`}
          </Typography>
        </ProductTitle>

        <Counter count={count} setCount={setCount} />

        {productDetails.colors ? (
          <ProductColor colors={productDetails.colors} />
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "60px",
          }}
        >
          {productDetails.sizes ? <ProductSize /> : null}
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
              {isInWishlist ? (
                <FaBookmark
                  onClick={() => removeFromWishlist(productDetails)}
                />
              ) : (
                <FaRegBookmark onClick={() => addToWishlist(productDetails)} />
              )}
            </IconButton>

            <AddingButton
              sx={{
                backgroundColor: "#FCDD06 !important",
                borderRadius: "5px !important",
              }}
              disabled={isInCart}
              onClick={handleAddToCart}
            >
              Add to cart
            </AddingButton>
          </DivButtons>
        </div>
        <div>
          <Typography variant="body2">{productDetails.description}</Typography>
        </div>
      </Box>
    </>
  );
};

export default ProductContent;
