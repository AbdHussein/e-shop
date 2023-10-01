import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import ProductImgs from "../components/ProductImgs";
import { Button, TextField, Typography } from "@mui/material";
import { Products } from "../components/providers/ProductsContext";
import api from "../api";
const NewProductDetails = () => {
  const { getData } = useContext(Products);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const files = Array.from(event.target.file.files);
      const promises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("image", file);
        const response = await api.post("/api/upload", formData);
        return response.data;
      });

      const images = await Promise.all(promises);

      const response = await api.post("/api/products", {
        countInStock: event.target.count.value,
        discount: 0,
        price: event.target.price.value,
        description: event.target.description.value,
        brand: event.target.brand.value,
        name: event.target.name.value,
        colors: [],
        categories: [event.target.categories.value],
        images: images,
      });

      await getData();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
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
        {" "}
        <Grid item xs={5}>
          <ProductImgs
            img0={"/static/Capture.PNG"}
            img1={"/static/headphonesss.png"}
            img2={"/static/headphonesss.png"}
            img3={"/static/headphonesss.png"}
          />
        </Grid>
        <Grid item xs={7}>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "20px",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Product name
              </Typography>
              <TextField
                name="name"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Product Brand
              </Typography>
              <TextField
                name="brand"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Product ID
              </Typography>
              <TextField
                name="id"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Product Category
              </Typography>
              <TextField
                name="category"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Product Description
              </Typography>
              <TextField
                name="description"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "728px",
                    height: "90px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Count in Stock
              </Typography>
              <TextField
                name="count"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontSize="18px"
                fontWeight="500"
                sx={{
                  color: "#707070",
                  marginBottom: "10px",
                  marginLeft: "3px",
                }}
              >
                Price
              </Typography>
              <TextField
                name="price"
                id="outlined-basic"
                variant="outlined"
                inputProps={{
                  style: {
                    fontSize: 16,
                    width: "300px",
                    height: "35px",
                    padding: "0px",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", justifyContent: "end", margin: "15px 0px" }}
      >
        <Button variant="contained" color="success" type="submit">
          Create New Product
        </Button>
      </div>
    </form>
  );
};
export default NewProductDetails;
