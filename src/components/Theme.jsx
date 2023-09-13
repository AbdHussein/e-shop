import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "mulish",
    h1: {
      fontSize: 16,
      fontWeight: 500,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
    },
    h6: {
      fontSize: 50,
      fontWeight: 900,
    },
    h4: {
      fontSize: 24,
      fontWeight: 400,
    },
    body1: {
      fontSize: 30,
      fontWeight: 600,
    },
    body2: {
      fontSize: 18,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#FCDD06",
              color: "#000",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#FCDD06",
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              border: "1px solid #FCDD06",
              color: "#000",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#FCDD06",
              },
            }),
        }),
      },
    },
  },
  // color: {
  //   base: "#FCDD06",
  // },
});
