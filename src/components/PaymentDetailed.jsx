import { Typography } from '@mui/material'
import React from 'react'

export const PaymentDetailed = ({title,value}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <Typography variant='h4'sx={{color:"#242424",fontSize:"22px"}}>{title}</Typography>
    <Typography variant='body2' sx={{color:"#707070"}}>{value}</Typography>
   </div>
  )
}

export default PaymentDetailed
