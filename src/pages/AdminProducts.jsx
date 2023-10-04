import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";

import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NewProdTable from "../components/NewProdTable";
import { Products } from "../components/providers/ProductsContext";

const AdminProducts = () => {
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
        <NewProdTable />
      </Table>
    </Container>
  );
};

export default AdminProducts;
