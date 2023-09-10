import React from 'react'
import Category from '../components/Category';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
const Home = () => {

  return (
    <>
      <section className='Featured Categories'>
        <Button variant='contained' color='primary'>
          Test
        </Button>
        <Container maxWidth='xl'>
          <Typography variant='h2' fontSize={"32px"} fontWeight={"600"}>Featured Categories</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
              <Category src={'/static/laptop.png'} text={"LAPTOP"}/>
              </Grid>
              <Grid item xs={3}>
              <Category src={'/static/computer-component'} text={"COMPUTER COMPONENTS"}/>
              </Grid>
              <Grid item xs={3}>
                <Category src={'/static/phones.jfif'} text={"DEVICES"}/>
              </Grid>
              <Grid item xs={3}>
                <Category src={'/static/img4.PNG'} text={"ACCESSORIES"}/>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  )
}

export default Home
