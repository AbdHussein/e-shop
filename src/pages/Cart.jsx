import React, { useContext } from "react";
import Carts from "../components/Carts";
import Grid from "@mui/material/Grid";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CartItems from "../components/CartItems";
import EmptyCart from "../components/EmptyCart";
import SectionHeading from "../components/styled/SectionHeading";
import YellowSpan from "../components/styled/YellowSpan";
import Container from "@mui/material/Container";
import ViewProuducts from "../components/ViewProuducts";
import { Divider } from "@mui/material";
import { CartContext } from "../components/providers/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ marginLeft: "6rem", marginTop: "10px" }}
      >
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <Typography variant="h1">Back</Typography>
        </Link>

        <Typography color="text.primary" variant="h1">
          Shopping Cart
        </Typography>
      </Breadcrumbs>


      {cart.items && cart.items.length === 0 ? (
        <section>
          <Container>
            <EmptyCart />
            <SectionHeading>
              <Typography variant="h2" sx={{ marginBottom: "10px" }}>
                Recently viewed
              </Typography>
              <YellowSpan></YellowSpan>
            </SectionHeading>
            <Divider sx={{ marginBottom: "43px" }} />

            <ViewProuducts />
          </Container>
        </section>
      ) : (
        <section style={{ marginTop: "10px" }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Carts />
            </Grid>
            <Grid item xs={4}>
              <CartItems cartItems={cart} />
            </Grid>
          </Grid>
        </section>
      )}
    </div>
  );
};

export default Cart;
