import { TableRow } from "@mui/material";
import styled from "styled-components";

export const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
  &:nth-of-type(even) {
    background-color: #ffff;
  }
  & > td {
    color: #000;
    border: none;
    border-radius: 5px 0 0 5px;
    &:nth-of-type(even) {
      border-radius: 0 5px 5px 0;
    }
  }
  display: "flex";
  justify-content: space-between;
  align-items: center;
  border-radius: "20px" !important;
  padding: "10px" !important;
`;
export default TableRowStyled;
