import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/800.css"; // Specify weight
import NewBox from "./styled/NewBox";
import ImgBox from "./styled/ImgBox";

export const Category = ({ src, text }) => {
  return (
    <NewBox>
      <a href="#">
        <ImgBox>
          <img src={src} alt="" width={"100%"} height={"180px"} />
        </ImgBox>
      </a>

      <Typography variant="h3" sx={{ whiteSpace: "nowrap" }}>
        {text}
      </Typography>
    </NewBox>
  );
};

export default Category;
