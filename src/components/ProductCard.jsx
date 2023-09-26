import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import Product from "./styled/Product";
import ImgBox from "./styled/ImgBox";
import Rating from "@mui/material/Rating";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import AddingButton from "./styled/AddingButton";
import DivButtons from "./styled/DivButtons";
import IconButton from "./styled/IconButton";
import { Wishlist } from "./providers/WishlistContext";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  const { items, addToWishlist, removeFromWishlist } = useContext(Wishlist);

  if (!product) return null;

  const currentItem = items.find(({ _id }) => product._id === _id);

  return (
    <Product>
      <CardMedia>
        <ImgBox sx={{ background: "#fff", padding: "0px" }}>
          <img
            src={product.images[0] || ""}
            alt=""
            width={"100%"}
            height={"180px"}
          />
        </ImgBox>
      </CardMedia>
      <CardContent sx={{ padding: "0px" }}>
        <Typography
          variant="h4"
          sx={{ whiteSpace: "nowrap", fontSize: "16px" }}
        >
          {product.name}
        </Typography>
        <Rating
          name="simple-controlled"
          value={product.rating}
          readOnly
          precision={0.5}
        />
        <Typography variant="body1" sx={{ fontSize: "25px" }}>
          {`$${product.price}`}
        </Typography>
      </CardContent>

      <DivButtons>
        <IconButton>
          {currentItem ? (
            <FaBookmark onClick={() => removeFromWishlist(product)} />
          ) : (
            <FaRegBookmark onClick={() => addToWishlist(product)} />
          )}
        </IconButton>

        <AddingButton>Add to cart</AddingButton>
      </DivButtons>
    </Product>
  );
};

export default ProductCard;
