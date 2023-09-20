import React from 'react'

export const ProfileImg = ({src}) => {
  return (
    <div style={{width:"80px",height:"80px",borderRadius:"50%",border:"2px solid #FCDD06"}}>
      <img src={src} width={"100%"}height={"100%"} style={{borderRadius:"50%"}}/>
    </div>
  )
}

export default ProfileImg
