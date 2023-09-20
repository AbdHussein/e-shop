import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ShippingAddOrder from "./ShippingAddOrder";
import OrderPayDetails from "./OrderPayDetails";
import OrderDetails from "./OrderDetails";
import ShippingAddress from "./ShippingAddress";
import PaymentDetails from "./PaymentDetails";
import ShipOrderDetails from "./ShipOrderDetails";
import { Link } from "react-router-dom";

const StepperContent = ({ activeStep, setActiveStep }) => {
  if (activeStep === 0) {
    return (
      <div>
        <Grid
          sx={{
            display: "flex",
            marginTop: "35px",
            marginBottom: "25px",
            position: "relative",
            gap: "15px",
          }}
        >
          <Grid
            item
            xs={7}
            sx={{
              background: "#F2F2F2",
              padding: "50px",
              borderRadius: "16px",
            }}
          >
            <ShippingAddress />
            <PaymentDetails />
          </Grid>

          <Grid item xs={5}>
            <Typography
              variant="h1"
              sx={{ position: "absolute", right: "3%", top: "48px" }}
            >
              Change
            </Typography>
            <ShipOrderDetails sx={{ position: "relative" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 5px",
              }}
            >
              <Button
                sx={{ width: "200px" }}
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(1)}
              >
                Review Order
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  } else if (activeStep === 1) {
    return (
      <div style={{ display: "flex", gap: "25px" }}>
        <div
          style={{
            background: " #F2F2F2",
            borderRadius: "16px",
            width: "750px",
            padding: "50px",
            marginTop: "40px",
          }}
        >
          <ShippingAddOrder
            name={"John rose"}
            address={"56051 Jones Falls, Philippines, Turkey - 62502"}
          />
          <Typography
            variant="h4"
            fontWeight="800"
            sx={{ marginTop: "50px", position: "relative" }}
          >
            Order Details
          </Typography>
          <Typography variant="h1" sx={{ position: "absolute", right: "39%" }}>
            Change
          </Typography>
          <div style={{ marginTop: "35px" }}>
            <OrderDetails
              src={"/static/headphonesss.png"}
              name={"iPhone 11 Pro 256GB Memory"}
              price={"$499.99"}
              count={"1"}
              total={"$499.99"}
              line={false}
            />
          </div>
          <OrderDetails
            src={"/static/headphonesss.png"}
            name={"iPhone 11 Pro 256GB Memory"}
            price={"$499.99"}
            count={"1"}
            total={"$499.99"}
            line={false}
          />
          <Typography variant="h4" fontWeight="800">
            Payment Details
          </Typography>
          <Grid
            sx={{ display: "flex", marginTop: "35px", position: "relative" }}
          >
            <Grid item xs={3} sx={{ display: "flex" }}>
              <Typography sx={{ color: "#2b67e2" }}>VISA</Typography>
              <Typography variant="h1" sx={{ margin: "15px" }}>
                **** 1245
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h1"
                sx={{ position: "absolute", right: "5px", bottom: "100px" }}
              >
                Change
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            style={{
              marginTop: "40px",
              background: " #F2F2F2",
              borderRadius: "16px",
              width: "300px",
              padding: "30px",
            }}
          >
            <Typography variant="h4" fontWeight="800">
              Order Details
            </Typography>
            <OrderPayDetails
              Subtotal={"$589.98"}
              Tax={"$2.53"}
              Shipping={"$0.00"}
              Total={"$592.51"}
            />
          </div>

          <Link to="/PaymentSuccess">
            {" "}
            <Button
              sx={{ width: "200px" }}
              variant="contained"
              color="primary"
              href="#outlined-buttons"
            >
              Place Order
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default StepperContent;
