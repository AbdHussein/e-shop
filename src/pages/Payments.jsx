import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import StepperContent from "../components/StepperContent";

const Payments = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section style={{ marginTop: "25px" }}>
      <Container>
        <Typography variant="h2">Review Order</Typography>
        <Stepper sx={{ marginTop: "15px" }} activeStep={activeStep}>
          <Step>
            <StepLabel>Shipping and Payment</StepLabel>
          </Step>
          <Step>
            <StepLabel>Place an Order</StepLabel>
          </Step>
        </Stepper>

        <StepperContent activeStep={activeStep} setActiveStep={setActiveStep} />
      </Container>
    </section>
  );
};

export default Payments;
