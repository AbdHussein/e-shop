import React from "react";

const ProfileImgShowed = ({ src }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid #Ffff",
      }}
    >
      <img
        src={src}
        width={"100%"}
        height={"100%"}
        style={{ borderRadius: "50%", objectFit: "cover" }}
        alt=" "
      />
    </div>
  );
};

export default ProfileImgShowed;
