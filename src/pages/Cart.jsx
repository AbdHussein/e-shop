import React from "react";
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
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ marginLeft: "6rem", marginTop: "10px" }}
      >
        <Link to={navigate(-1)}>
          <Typography variant="h1">Back</Typography>
        </Link>

        <Typography color="text.primary" variant="h1">
          Shopping Cart
        </Typography>
      </Breadcrumbs>

      <section>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Carts />
          </Grid>
          <Grid item xs={4}>
            <CartItems NoOFitems={"3"} Total={"$999.97"} subTotal={"$989.97"} />
          </Grid>
        </Grid>
      </section>
      <section>
        <EmptyCart />
      </section>
      <section style={{ display: "none" }}>
        <Container>
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
    </div>
  );
};

export default Cart;
