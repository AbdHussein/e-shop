import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import Product from "./styled/Product";
import ImgBox from "./styled/ImgBox";
import Rating from "@mui/material/Rating";
import { FaRegBookmark } from "react-icons/fa";
import AddingButton from "./styled/AddingButton";
import DivButtons from "./styled/DivButtons";
import IconButton from "./styled/IconButton";

export const ProductCard = ({ src, text, price }) => {
  const [value, setValue] = React.useState(2);

  return (
    <Product>
      <CardMedia>
        <ImgBox sx={{ background: "#fff", padding: "0px" }}>
          <img src={src} alt="" width={"100%"} height={"180px"} />
        </ImgBox>
      </CardMedia>
      <CardContent sx={{ padding: "0px" }}>
        <Typography
          variant="h4"
          sx={{ whiteSpace: "nowrap", fontSize: "16px" }}
        >
          {text}
        </Typography>
        <Rating name="simple-controlled" value={value} readOnly />
        <Typography variant="body1" sx={{ fontSize: "25px" }}>
          {price}
        </Typography>
      </CardContent>

      <DivButtons>
        <IconButton>
          <FaRegBookmark />
        </IconButton>

        <AddingButton>Add to cart</AddingButton>
      </DivButtons>
    </Product>
  );
};

export default ProductCard;
