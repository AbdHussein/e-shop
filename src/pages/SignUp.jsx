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
const SignUp = () => {
  return (
    <section
      style={{ paddingTop: "25px", marginBottom: "0px", paddingBottom: "0px" }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={4}>
            <Typography variant="body1">Signup.</Typography>
            <Typography variant="h3" fontWeight="400" sx={{ color: "#707070" }}>
              Sign up and get exclusive offers from us
            </Typography>
            <form
              style={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "7px",
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
                    Name
                  </Typography>
                </FormLabel>

                <TextField
                  label="Your Name"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      width: "378px",
                      padding: "9px 5px",
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
                    Enter your email address
                  </Typography>
                </FormLabel>

                <TextField
                  label="name@example.com"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      width: "378px",
                      padding: "9px 5px",
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
                      padding: "9px 5px",
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
                    Confirm your password
                  </Typography>
                </FormLabel>

                <TextField
                  label="Confirm your password"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      width: "378px",
                      padding: "9px 5px",
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
                  sx={{ width: "378px", marginLeft: " 24px" }}
                >
                  Sign Up
                </Button>
                <Divider
                  sx={{
                    height: "15px",
                    fontSize: "50px",
                    width: "378px",
                  }}
                />
                <Typography variant="body2" sx={{ color: "#707070" }}>
                  Have an account ?{" "}
                  <Link to="/LogIn">
                    {" "}
                    <span style={{ color: "black" }}>Login</span>
                  </Link>
                </Typography>
              </div>
            </form>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/static/SignUp.png"
              alt=""
              style={{ width: "80%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SignUp;
