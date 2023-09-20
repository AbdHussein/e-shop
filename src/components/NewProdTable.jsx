import React from "react";
import { Table, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import ProductRowStyle from "./styled/ProductRowStyle";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const NewProdTable = ({ products }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#707070",
      fontWeight: "600",
    },
  }));
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
          <TableCell>{Product.id}</TableCell>
          <TableCell>{Product.name}</TableCell>
          <TableCell>{Product.price}</TableCell>
          <TableCell>{Product.categorey}</TableCell>
          <TableCell sx={{ display: "flex", gap: "25px" }}>
            <EditIcon
              sx={{ color: "black", background: "white", borderRadius: "6px" }}
            />
            <DeleteIcon
              sx={{ color: "white", background: "red", borderRadius: "6px" }}
            />
          </TableCell>
        </ProductRowStyle>
      ))}
    </Table>
  );
};

export default NewProdTable;
