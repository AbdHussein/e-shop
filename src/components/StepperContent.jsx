import { Button } from "@mui/material";
import React from "react";

const StepperContent = ({ activeStep, setActiveStep }) => {
  if (activeStep === 0) {
    return (
      <div>
        <h1>hi</h1>
        <Button onClick={() => setActiveStep(1)}> CLICK</Button>
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
