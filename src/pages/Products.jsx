import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Products = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.grey,
      fontWeight: "800",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: "800",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("#564531", "Airpods", "$89.99", "$89.99", 4.0),
    createData("#564532", "Airpods", "$89.99", "$89.99", 4.0),
    createData("#564533", "Airpods", "$89.99", "$89.99", 4.0),
    createData("#564534", "Airpods", "$89.99", "$89.99", 4.0),
    createData("#564535", "Airpods", "$89.99", "$89.99", 4.0),
  ];
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
        <Link tp="/CreateProduct">
          {" "}
          <Button variant="contained" color="primary">
            Create Product
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PRODUCT ID</StyledTableCell>
              <StyledTableCell align="right">PRODUCT NAME</StyledTableCell>
              <StyledTableCell align="right">PRODUCT PRICE</StyledTableCell>
              <StyledTableCell align="right">CATEGORY</StyledTableCell>
              <StyledTableCell align="right">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Products;
