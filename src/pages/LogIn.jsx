import React from "react";
import Grid from "@mui/material/Grid";
import SignInOutImg from "../components/styled/SignInOutImg";
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
    <section style={{ paddingTop: "35PX" }}>
      <Container>
        <Grid container spacing={2}>
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
                gap: "20px",
                paddingTop: "35px",
              }}
            >
              <div>
                <FormLabel>
                  <Typography
                    variant="h3"
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
                    variant="h3"
                    fontWeight="400"
                    sx={{ color: "black", paddingBottom: "10px" }}
                  >
                    Password
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
                    marginBottom: "30px",
                  }}
                />
                <Link to="/SignUp">
                  <Button variant="outlined" color="primary">
                    Sign up now
                  </Button>
                </Link>
              </div>
            </form>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", justifyContent: "end" }}>
            <SignInOutImg>
              <img src="/static/SignIn.png" alt="" style={{ width: "100%" }} />
            </SignInOutImg>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LogIn;
