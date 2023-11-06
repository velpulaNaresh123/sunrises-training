import {Link} from "react-router-dom"
const Kids=()=>{
    return(
        <>
        <h1>Kids Page.................!</h1><br></br>
        <Link to={"/Kids/Toys"} style={{marginRight:100}} >Toys</Link>
        <Link to={"/Kids/Cloths"}style={{marginRight:100}}>Cloths</Link>
        
        
        </>
    )
}
export default Kids;