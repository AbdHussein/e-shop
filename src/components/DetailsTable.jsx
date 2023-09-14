import React from "react";
import { Table, TableCell, Typography } from "@mui/material";

import TableRowStyled from "./styled/TableRowStyled";

const DetailsTable = ({ details }) => {
  return (
    <Table sx={{ marginTop: "20px" }}>
      {details.map((item) => (
        <TableRowStyled>
          <TableCell>{item.proparty}</TableCell>
          <TableCell>{item.value}</TableCell>
        </TableRowStyled>
      ))}
    </Table>
  );
};

export default DetailsTable;
