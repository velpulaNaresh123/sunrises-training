import {Link} from "react-router-dom"
const Electroniics=()=>{
    return(
        <>
        <h1>Electronics Page.................!</h1><br></br>
        <Link to={"/Electronics/Mobiles"} style={{marginRight:100}} >Mobiles</Link>
        <Link to={"/Electronics/Laptops"}style={{marginRight:100}}>Mobiles</Link>
        
        
        </>
    )
}
export default Electroniics;