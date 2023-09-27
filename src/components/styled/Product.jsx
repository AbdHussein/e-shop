import styled from "styled-components";
import { Card } from "@mui/material";

export const Product = styled(Card)`
  border-radius: 20px !important;
  min-width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background: #ffff;
  padding: 40px;
  text-align: center;
  box-shadow: none !important;
`;
export default Product;
