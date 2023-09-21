import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileImgShowed from "./ProfileImgShowed";
import YellowBtn from "./styled/YellowBtn";


const Profile = () => {
  const[img, setImg]=useState();

  return (
    <Grid
      container 
      spacing={4}
      sx={{
        backgroundColor: "#F2F2F2",
        borderRadius: "15px",
        padding: "20px",
        marginTop: "-24px !important",
        alignItems: "flex-start",
        minWidth: "700px",
        flexWrap: "nowrap",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          paddingLeft: "10px !important",
          paddingTop: "10px !important",
        }}
      >
        <Typography variant="h4">My Profile</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"First Name"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Last Name"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Email"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Birthday"}</Typography>
        <YellowBtn>Change Password</YellowBtn>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent:'center',
          margin: 'auto',
          paddingLeft: "10px !important",
          paddingTop: "0px !important",
        }}
      >
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Farah"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Mahdi"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"Farah@vzddv"}</Typography>
        <Typography variant='body2'sx={{textAlign:"left"}}>{"28/10/2001"}</Typography>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          paddingLeft: "10px !important",
          paddingTop: "10px !important",
        }}
      >
        <ProfileImgShowed src={img ? URL.createObjectURL(img) : "./static/avatar.jpg"} />
        <label htmlFor="img">
          <input type="file" id="img" name="img" onChange={(event) => setImg(event.target.files[0])}
              style={{
                padding: "20px 10px",

                display: "flex",
                alignItems: "center",
                display: "none",
              }} />
          <YellowBtn>Upload new photo</YellowBtn>
        </label>
        
      </Grid>
    </Grid>
  );
};

export default Profile;
