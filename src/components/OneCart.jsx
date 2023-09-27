import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ImgCard from "../components/styled/ImgCard";
import CounterCarts from "../components/styled/CounterCarts";
import { AiOutlineClose } from "react-icons/ai";
import DeleteCard from "../components/styled/DeleteCard";
import { CartContext } from "./providers/CartContext";
const OneCart = ({ src, price, text, id }) => {
  const { removeFromcart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };
  return (
    <li className="cartItem">
      <Grid container spacing={3}>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "baseline" }}>
          <ImgCard>
            <img
              src={src}
              alt=""
              style={{ width: "88%", paddingLeft: "15px" }}
            />
          </ImgCard>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "left", paddingLeft: "10px" }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <CounterCarts>
            <Button onClick={DecNum} sx={{ outlineColor: "yellow" }}>
              <AiOutlineMinus />
            </Button>

            <h1>{count}</h1>
            <Button onClick={IncNum}>
              <AiOutlinePlus />
            </Button>
          </CounterCarts>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{price}</Typography>
          <DeleteCard>
            {" "}
            <AiOutlineClose onClick={() => removeFromcart(id)} />
          </DeleteCard>
        </Grid>
      </Grid>
    </li>
  );
};

export default OneCart;
