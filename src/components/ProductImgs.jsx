import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImgFile from "./styled/ImgFile";
import { Typography } from "@mui/material";
const ProductImgs = ({ img0, img1, img2, img3 }) => {
  const [files, setFiles] = useState([]);

  function handelFile(event) {
    const files = Array.from(event.target.files);

    if (files.length > 4) {
      console.error("more than 4 images");
      return;
    }

    setFiles(files);
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
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
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

                display: "flex",
                alignItems: "center",
                display: "none",
              }}
            />

            {files[0] ? (
              <div style={{ width: "340px", height: "248px" }}>
                <img
                  src={URL.createObjectURL(files[0])}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ) : (
              <div style={{ width: "250px", height: "100px" }}>
                <img
                  src={"/static/Capture.PNG"}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <Typography fontSize="18px" sx={{ color: "#707070" }}>
                  Product Images
                  <span style={{ fontSize: "10px" }}> (4 images allowed)</span>
                </Typography>
              </div>
            )}
          </label>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", gap: "15px" }}>
          <ImgFile>
            <img
              src={files[1] ? URL.createObjectURL(files[1]) : img1}
              alt=""
              style={{ width: "102px", height: "93px", objectFit: "cover" }}
            />
          </ImgFile>
          <ImgFile>
            <img
              src={files[2] ? URL.createObjectURL(files[2]) : img2}
              alt=""
              style={{ width: "102px", height: "93px", objectFit: "cover" }}
            />
          </ImgFile>
          <ImgFile>
            <img
              src={files[3] ? URL.createObjectURL(files[3]) : img3}
              alt=""
              style={{ width: "102px", height: "93px", objectFit: "cover" }}
            />
          </ImgFile>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductImgs;
