import React from "react";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import {
  Button,
  FormControlLabel,
  Checkbox,
  FormLabel,
  TextField,
  Divider,
} from "@mui/material";

const LogIn = () => {
  return (
    <section
      style={{ paddingTop: "25px", paddingBottom: "0px", marginBottom: "0px" }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="body1">Login.</Typography>
            <Typography variant="h4" fontWeight="400" sx={{ color: "#707070" }}>
              Login with your data that you entered during registration
            </Typography>

            <form
              style={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "15px",
              }}
            >
              <div>
                <FormLabel>
                  <Typography
                    variant="body2"
                    fontWeight="400"
                    sx={{ color: "black", paddingBottom: "10px" }}
                  >
                    Enter your email address
                  </Typography>
                </FormLabel>

                <TextField
                  label="name@example.com"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      width: "378px",
                      padding: "11px 5px",
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 10 } }}
                />
              </div>
              <div>
                <FormLabel>
                  <Typography
                    variant="body2"
                    fontWeight="400"
                    sx={{ color: "black", paddingBottom: "10px" }}
                  >
                    Password
                  </Typography>
                </FormLabel>

                <TextField
                  label="Password"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      width: "378px",
                      padding: "11px 5px",
                    },
                  }}
                  InputLabelProps={{ style: { fontSize: 10 } }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "378px" }}
                >
                  Login
                </Button>
                <FormControlLabel
                  value="RememberMe"
                  control={<Checkbox />}
                  label="Remember Me"
                  labelPlacement="end"
                  style={{
                    color: "#707070",
                  }}
                  componentsProps={{
                    typography: {
                      variant: "body2",
                    },
                  }}
                />
                <Typography variant="body2">Forgot your password?</Typography>
                <Divider
                  sx={{
                    height: "15px",
                    fontSize: "50px",
                    width: "378px",
                    marginBottom: "20px",
                  }}
                />
                <Link to="/SignUp">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      "&:hover": {
                        border: "1px solid rgb(241, 241, 241)",
                        boxShadow:
                          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    Sign up now
                  </Button>
                </Link>
              </div>
            </form>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/static/SignIn.png"
              alt=""
              style={{ width: "60%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LogIn;
