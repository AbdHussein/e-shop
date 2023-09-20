import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ProductImgs from "../components/ProductImgs";
import NewProductDetails from "../components/NewProductDetails";
const CreateProduct = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Container>
        <Typography variant="h4" fontWeight="800">
          Create New Product
        </Typography>

        <Grid
          sx={{
            padding: "35px 25px 25px 25px",
            marginTop: "15px",
            background: "#F2F2F2",
            borderRadius: "16px",
            display: "flex",
            gap: "30px",
          }}
        >
          <Grid item xs={5}>
            <ProductImgs
              img0={"/static/Capture.PNG"}
              img1={"/static/headphonesss.png"}
              img2={"/static/headphonesss.png"}
              img3={"/static/headphonesss.png"}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4" fontWeight="800">
              Product Details
            </Typography>
            <NewProductDetails />
          </Grid>
        </Grid>

        <div
          style={{ display: "flex", justifyContent: "end", margin: "15px 0px" }}
        >
          <Button variant="contained" color="success">
            Create New Product
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CreateProduct;
