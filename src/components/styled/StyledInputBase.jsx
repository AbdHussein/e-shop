import styled from "styled-components";
import InputBase from "@mui/material/InputBase";
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: "10px",
  width: "400px",
  height: "40px",
      "& input::placeholder": {
        fontSize: "14px",
       
        
      }
    

}));
export default StyledInputBase;
