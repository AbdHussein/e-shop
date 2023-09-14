import styled from "styled-components"


export const CounterCarts = styled("div")(({ theme }) => ({
 display:"flex",
 flexDirection:"row",
 background:"white",
 height: "40px",
 
 justifyContent: "space-around",
    margin:" 38px 0px",
    
    textAlign:"center",
    alignItems: "center"
}));

export default CounterCarts
