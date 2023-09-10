import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import Badge from "@mui/material/Badge";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavApp = () => {

  const Search = styled("div")(({ theme }) => ({
    background: "white",
    width: "530px",
    height: "40px",
    borderRadius: "6px",
    opacity: "1",
  }));

  const SearchIconButton = styled("div")(({ theme }) => ({
    background: "#FCDD06",
    width:"130px",
    height:"40px",
    borderRadius: "6px",
    opacity: "1",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  }));

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({

    marginLeft: "10px",
    width: "400px",
    height: "40px",
  }));
  const Notes = styled("div")(({ theme }) => ({
    marginLeft: "80px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"1.5rem"
  }));
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Typography variant="h4" marginLeft={8}>
          <span className="yellow">Pro</span>Shop
        </Typography>
        <Search sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <StyledInputBase
            placeholder="Iphone"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconButton>
            <SearchIcon />
          </SearchIconButton>
        </Search>

        <Notes sx={{ color: 'action.active' }}>
      
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
              Login / Sign up
            </Typography>
          </Badge>
          <Badge
              color="error" badgeContent={0} showZero
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
          <Badge
                  color="error" badgeContent={0} showZero
            sx={{
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
        </Notes>
      </Toolbar>
    </AppBar>
  );
};

export default NavApp;
