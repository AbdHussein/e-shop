import { Button } from "@mui/material";
import styled from "styled-components";

export const SizeButton = styled(Button)`
  width: 120px !important ;
  height: 40px !important;
  border-radius: 10px !important;
  color: #000 !important;
  font-weight: 500 !important;
  background-color: #edeae3 !important;
  border: none !important;
  &:hover {
    background-color: #000 !important;
    color: #ffff !important;
    font-weight: 500 !important;
  }
  &:focus {
    background-color: #000 !important;
    color: #ffff !important;
    font-weight: 500 !important;
  }
`;
export default SizeButton;
