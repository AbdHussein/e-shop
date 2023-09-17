import { Button } from "@mui/material";
import React from "react";

const StepperContent = ({ activeStep, setActiveStep }) => {
  if (activeStep === 0) {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          href="#outlined-buttons"
          onClick={() => setActiveStep(1)}
        >
          Place Order
        </Button>
      </div>
    );
  } else if (activeStep === 1) {
    return (
      <div>
        <h1>bye</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default StepperContent;
