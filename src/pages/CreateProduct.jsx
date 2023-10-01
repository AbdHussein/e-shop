import { Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import Grid from "@mui/material/Grid";

import NewProductDetails from "../components/NewProductDetails";
const CreateProduct = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Container>
        <Typography variant="h4" fontWeight="800">
          Create New Product
        </Typography>
        <NewProductDetails />
      </Container>
    </div>
  );
};

export default CreateProduct;
