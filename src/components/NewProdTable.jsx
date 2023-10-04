import React, { useContext, useEffect } from "react";
import { Table, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import ProductRowStyle from "./styled/ProductRowStyle";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Products } from "./providers/ProductsContext";
import api from "../api";

const NewProdTable = () => {
  const { products, setProducts } = useContext(Products);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#707070",
      fontWeight: "600",
    },
  }));

  const handelDelete = async (productId) => {
    try {
      const response = await api.delete(`/api/products/?id=${productId}`);
      // response.data.products
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Table>
      <TableHead>
        {" "}
        <TableRow>
          <StyledTableCell>PRODUCT ID</StyledTableCell>
          <StyledTableCell>PRODUCT NAME</StyledTableCell>
          <StyledTableCell>PRODUCT PRICE</StyledTableCell>
          <StyledTableCell>CATEGORY</StyledTableCell>
          <StyledTableCell>ACTION</StyledTableCell>
        </TableRow>
      </TableHead>
      {products.map((Product) => (
        <ProductRowStyle>
          <TableCell>{Product._id}</TableCell>
          <TableCell>{Product.name}</TableCell>
          <TableCell>{Product.price}</TableCell>
          <TableCell>{Product.categories}</TableCell>
          <TableCell>
            <DeleteIcon
              sx={{
                color: "white",
                background: "red",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                handelDelete(Product._id);
              }}
            />
          </TableCell>
        </ProductRowStyle>
      ))}
    </Table>
  );
};

export default NewProdTable;
