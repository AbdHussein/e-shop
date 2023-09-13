import styled from "styled-components";
export const TextBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  textAlign: "left",
  gap: "5px",
  minWidth: "340px",
  letterSpacing: " 0.48px",
}));
export default TextBox;
