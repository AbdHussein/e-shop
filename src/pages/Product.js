import { Breadcrumbs, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SideImgs from '../components/SideImgs'
import ProductContent from '../components/ProductContent'
import ProductDetails from '../components/ProductDetails'
import Reviews from '../components/Reviews'
import FeaturedProducts from '../components/FeaturedProducts'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../api'
import { CartContext } from '../components/providers/CartContext'


const Product = () => {
  const [productDetails, setProductDetails] = useState({});

  const { cart } = useContext(CartContext)
  let { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getDetails = async (productId) => {
      try {
        const response = await api.get(`/api/products/${productId}`);

        setProductDetails(response.data);
        console.log({ data: response.data })
      } catch (error) {
        console.error(error);
      }
    };
    getDetails(id)
  }, [id])

  const isInCart = cart.items && cart.items.find(({ _id }) => _id === id)


  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "30px", marginBottom: "30px" }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "20px", marginTop: "20px" }}>
          <Typography variant="h1" onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}>Back</Typography>

          <Typography sx={{ fontSize: "20px" }} color="text.primary">{productDetails.name}</Typography>
        </Breadcrumbs>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <SideImgs src={productDetails.images} />
          </Grid>
          <Grid item xs={7}>

            <ProductContent isInCart={Boolean(isInCart)} productDetails={productDetails} />
          </Grid>
        </Grid>

        {/* <ProductDetails productDetails={productDetails} /> */}
        <Reviews review={productDetails.reviews} />

      </Container>
      <FeaturedProducts />
    </>
  )
}

export default Product
