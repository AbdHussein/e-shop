import { Box, Typography } from '@mui/material'
import React from 'react'

const PaymentSuccessBox = ({orderNO,address,orderItem}) => {
  return (
    <Box sx={{maxWidth:"70%",display:"flex",flexDirection:"column",gap:"15px"}}>
       <Typography variant='h2'sx={{color:"#242424"}}>Payment Success !</Typography>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h4'sx={{color:"#242424"}}>Order number</Typography>
        <Typography variant='body2' sx={{color:"#707070"}}>{orderNO}</Typography>
       </div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h4'sx={{color:"#242424"}}>Shipping Address</Typography>
        <Typography variant='body2' sx={{color:"#707070"}}>{address}</Typography>
       </div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant='h4'sx={{color:"#242424"}}>Order Items</Typography>
        <Typography variant='body2' sx={{color:"#707070"}}>{orderItem}</Typography>
       </div>
       <Typography variant='body2'sx={{color:"#242424",textWrap:"wrap",maxWidth:"382px"}}>An email will be sent to your email address contains order confirmation and tacking code.</Typography>
    </Box>
  )
}

export default PaymentSuccessBox
