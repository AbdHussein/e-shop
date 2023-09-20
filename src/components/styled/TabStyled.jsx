import Tab from '@mui/material/Tab';
import styled from "styled-components";
export const TabStyled = styled(Tab)((props)=>({
    color:"#242424 !important",
    fontSize:"20px!important",
    fontWeight:'500 !important',
    display:'flex !important',
    flexDirection:'row !important',
    gap:'5px',
    textTransform:'capitalize !important',
    justifyContent: 'start !important',
    '&.Mui-selected': {
        fontWeight:'600 !important',
    }

}))
    
export default TabStyled;