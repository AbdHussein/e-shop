import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImgFile from "./styled/ImgFile";
import { Typography } from "@mui/material";
const ProductImgs = ({ img0, img1, img2, img3 }) => {
  const [file, setFile] = useState();
  function handelFile(event) {
    let count = 0;

    setFile(event.target.files[0]);

    console.log(event.target.files);
    if (FileList.length === 4) {
      return;
    }
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Grid
          item
          xs={4}
          sx={{
            width: "342px",
            border: "1px dashed #707070",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
            height: "250px",
          }}
        >
          <label htmlFor="file">
            <input
              type="file"
              name="file"
              id="file"
              multiple
              onChange={handelFile}
              style={{
                padding: "20px 10px",
                width: "70%",
                display: "flex",
                alignItems: "center",
                display: "none",
              }}
            />
            <img src="/static/Capture.PNG" alt="" />
          </label>
          {/* <img src={img0} alt="" /> */}
          <Typography fontSize="16px" sx={{ color: "#707070" }}>
            Product Images{" "}
            <Typography variant="10px">(4 images allowed)</Typography>
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", gap: "15px" }}>
          <ImgFile>
            <img src={img1} alt="" style={{ width: "102px", height: "93px" }} />
          </ImgFile>
          <ImgFile>
            <img src={img2} alt="" style={{ width: "102px", height: "93px" }} />
          </ImgFile>
          <ImgFile>
            <img src={img3} alt="" style={{ width: "102px", height: "93px" }} />
          </ImgFile>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductImgs;
