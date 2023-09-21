import { Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideImgs from '../components/SideImgs'
import ProductContent from '../components/ProductContent'
import ProductDetails from '../components/ProductDetails'
import Reviews from '../components/Reviews'
import FeaturedProducts from '../components/FeaturedProducts'



const Product = () => {
  const [productDetails, setProductDetails] = useState([
    { proparty: "Brand:", value: "Apple" },
    { proparty: "Brand:", value: "Apple" },
    { proparty: "Brand:", value: "Apple" },
    { proparty: "Brand:", value: "Apple" }
  ])

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "30px", marginBottom: "30px" }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "20px" }}>
          <Link underline="hover" color="inherit" href="/" sx={{ fontSize: "20px" }}>
            Back
          </Link>

          <Typography sx={{ fontSize: "20px" }} color="text.primary">iPhone 11 Pro 256GB Memory</Typography>
        </Breadcrumbs>
        <Grid container spacing={4}  >
          <Grid item xs={5}>
            <SideImgs src={"/static/a.webp"} src1={"/static/iphone1.jpg"} src2={"/static/ipnone2.jpg"} src3={"/static/iphone3.jfif"} />
          </Grid>
          <Grid item xs={7}>

            <ProductContent title={`Apple iPhone 11 Pro 256GB Memory`} price={`$499.99`} discription={'Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.'} />
          </Grid>
        </Grid>

        <ProductDetails productDetails={productDetails} />
        <Reviews />

      </Container>
      <FeaturedProducts />
    </>
  )
}

export default Product
