import { Box, Typography } from '@mui/material'
import React from 'react'
import PaymentDetailed from './PaymentDetailed'

const PaymentSuccessBox = ({orderNO,address,orderItem}) => {
  return (
    <Box sx={{maxWidth:"70%",display:"flex",flexDirection:"column",gap:"15px"}}>
       <Typography variant='h2'sx={{color:"#242424"}}>Payment Success !</Typography>
       <PaymentDetailed title={"Order number"} value={orderNO}/>
       <PaymentDetailed title={"Shipping Address"} value={address}/>
       <PaymentDetailed title={"Order Items"} value={orderItem}/>
     
       <Typography variant='body2'sx={{color:"#242424",textWrap:"wrap",maxWidth:"382px"}}>An email will be sent to your email address contains order confirmation and tacking code.</Typography>
    </Box>
  )
}

export default PaymentSuccessBox
