import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";

import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NewProdTable from "../components/NewProdTable";

const Products = ({}) => {
  const [product, setProduct] = useState([
    { id: "#564531", name: "Airpods", price: "90$", categorey: "Phone" },
    { id: "#564532", name: "Airpods", price: "90$", categorey: "Phone" },
    { id: "#564537", name: "Airpods", price: "90$", categorey: "Phone" },
    { id: "#564534", name: "Airpods", price: "90$", categorey: "Phone" },
  ]);

  return (
    <Container>
      <Typography variant="h4" fontWeight="800" sx={{ margin: "20px 0px" }}>
        Products
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "-30px 0px 15px",
        }}
      >
        <Link to="/CreateProduct">
          {" "}
          <Button variant="contained" color="primary">
            Create Product
          </Button>
        </Link>
      </div>

      <Table>
        <NewProdTable products={product} />
      </Table>
    </Container>
  );
};

export default Products;
