import { TableRow } from "@mui/material";
import styled from "styled-components";

export const ProductRowStyle = styled(TableRow)`
  &:nth-of-type(odd) {
    & > td {
      background-color: #f2f2f2;
    }
  }
  &:nth-of-type(even) {
    & > td {
      background-color: #ffff;
    }
  }
  & > td {
    color: #000;
    border: none;
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
  }
  display: "flex";
  justify-content: space-between;
  align-items: center;
  /* border-radius: "20px" !important; */
  padding: 10px !important;
  border-radius: 0 5px 5px 0 !important;
`;
export default ProductRowStyle;
