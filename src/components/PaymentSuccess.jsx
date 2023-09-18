import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import PaymentSuccessBox from './PaymentSuccessBox'
import { Link } from 'react-router-dom'
import ViewProuducts from './ViewProuducts'
import SectionHeading from './styled/SectionHeading'
import YellowSpan from './styled/YellowSpan'

const PaymentSuccess = () => {
  return (
    <>
      <Container sx={{marginTop:"15px"}}>
        <Box sx={{backgroundColor:"#F2F2F2",borderRadius:"15px",padding:"20px 25px"}}>
        <PaymentSuccessBox orderNO={"12-12-15"} address={"cjsbajc"} orderItem={"xsjnjasxc"}/>
      
        </Box>
        <Box sx={{marginTop:"15px",display:"flex",justifyContent:"end"}}>
        <Link to="/">
        <Button variant='contained' color='primary'sx={{width:"200px",height:"40px",borderRadius:"2px"}}>Keep Shopping</Button>
        </Link>
        </Box>
        <section className="Recently viewed" style={{marginTop:"15px"}}>
        
          <SectionHeading>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
            Recently viewed
            </Typography>
            <YellowSpan></YellowSpan>
          </SectionHeading>
          <Divider sx={{ marginBottom: '43px' }} />
          <ViewProuducts />
      
      </section>
      </Container>
    </>
  )
}

export default PaymentSuccess
