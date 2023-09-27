import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/800.css"; // Specify weight
import NewBox from "./styled/NewBox";
import ImgBox from "./styled/ImgBox";
import { Products } from "./providers/ProductsContext";

export const Category = ({ categoryInfo }) => {
  return (
    <NewBox>
      <a href="#">
        <ImgBox>
          <img
            src={categoryInfo.image}
            alt=""
            width={"100%"}
            height={"180px"}
          />
        </ImgBox>
      </a>

      <Typography variant="h3" sx={{ whiteSpace: "nowrap" }}>
        {categoryInfo.name}
      </Typography>
    </NewBox>
  );
};

export default Category;
