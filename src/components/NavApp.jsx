import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory2";
import Badge from "@mui/material/Badge";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "./styled/Search";
import SearchIconButton from "./styled/SearchIconButton";
import StyledInputBase from "./styled/StyledInputBase";
import Notes from "./styled/Notes";
import { Link } from "react-router-dom";
import { Wishlist } from "./providers/WishlistContext.jsx";
import { CartContext } from "./providers/CartContext";

const NavApp = () => {
  const { items } = useContext(Wishlist);
  const { cart } = useContext(CartContext);
  // /search?q=""
  return (
    <AppBar position="sticky">
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
            {" "}
            <SearchIcon />
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
            badgeContent={items.length}
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
          <Link to="/Cart" style={{ color: "white" }}>
            <Badge
              color="error"
              badgeContent={cart.items && cart.items.length}
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
          <Link
            to="/Products"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InventoryIcon sx={{ fill: "white" }} />
            <Typography fontSize="0.65rem" color={"white"}>
              Products
            </Typography>
          </Link>
        </Notes>
      </Toolbar>
    </AppBar>
  );
};

export default NavApp;
