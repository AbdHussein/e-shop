import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import styled from 'styled-components'
import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/800.css"; // Specify weight

const NewBox = styled(Box)`
    border-radius: 20px;
    width:380px;
    height:390px ;
    display:flex;
    flex-direction: column;
    gap:30px;
    align-items: center;
    justify-content: center;
    padding:30px;
`

const ImgBox = styled(Box)`
    border-radius: 20px;
    background: #F7F8FC;
    width:380px;
    height:346px;
    padding:30px;
`

 export const Category = ({ src, text }) => {
  return (

    <NewBox>
        <a href="#">
          <ImgBox>
              <img src={src} alt="" width={'100%'} />
          </ImgBox>
        </a>
    
      <Typography variant="h3">{text}</Typography>
    </NewBox>
  )
}

export default Category
