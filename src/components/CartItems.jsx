import React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CartItemsPay from "./styled/CartItemsPay";
import CartCheckOut from "./styled/CartCheckOut";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
const CartItems = ({ NoOFitems, Total, subTotal }) => {
  return (
    <CartItemsPay>
      <Grid container spacing={2} columns={4}>
        <Grid item xs={4}>
          <Typography variant="h2" fontWeight="400">
            Subtotal ({NoOFitems}) items
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h3"
            fontWeight="400"
            sx={{ textDecoration: "line-through" }}
          >
            {Total}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2">{subTotal}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Divider />
          <CartCheckOut>
            <Link to="/Payments">
              {" "}
              <Button color="primary" variant="contained">
                Proceed to checkout
              </Button>
            </Link>
          </CartCheckOut>
        </Grid>
      </Grid>
    </CartItemsPay>
  );
};

export default CartItems;
