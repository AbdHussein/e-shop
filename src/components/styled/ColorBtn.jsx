import styled from "styled-components";
import { Button } from "@mui/material";
export const ColorBtn = styled(Button)((props) => ({
  "&:hover": {
    backgroundColor: props.style.backgroundColor,
    border: "1px solid #000 !important",
  },
  "&:focus": {
    border: "1px solid #000",
  },
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  backgroundColor: props.style.backgroundColor,
  border: "1px solid #ffff  !important",
}));
export default ColorBtn;
