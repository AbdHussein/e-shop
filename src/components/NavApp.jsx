import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "./styled/Search";
import SearchIconButton from "./styled/SearchIconButton";
import StyledInputBase from "./styled/StyledInputBase";
import Notes from "./styled/Notes";
import { Link } from "react-router-dom";

const NavApp = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Typography variant="h4" marginLeft={6}>
          <Link to="/">
            {" "}
            <span className="yellow">Pro</span>Shop
          </Link>
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Iphone"
            inputProps={{
              style: {
                fontSize: 16,
              },
            }}
          />
          <SearchIconButton>
            <Link to="/Search">
              {" "}
              <SearchIcon />
            </Link>
          </SearchIconButton>
        </Search>

        <Notes sx={{ color: "action.active" }}>
          <Link to="/LogIn">
            <Badge
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PersonIcon sx={{ fill: "white" }} />
              <Typography fontSize="0.65rem" color={"white"}>
                Login /Sign up
              </Typography>
            </Badge>
          </Link>
          <Badge
            color="error"
            badgeContent={0}
            showZero
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BookmarkIcon sx={{ fill: "white" }} />
            <Typography fontSize="0.65rem" color={"white"}>
              Wishlist
            </Typography>
          </Badge>
          <Link to="/Cart" xs={{ color: "white" }}>
            <Badge
              color="error"
              badgeContent={0}
              showZero
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ShoppingCartIcon sx={{ fill: "white" }} />
              <Typography fontSize="0.65rem" color={"white"}>
                Cart
              </Typography>
            </Badge>
          </Link>
        </Notes>
      </Toolbar>
    </AppBar>
  );
};

export default NavApp;
