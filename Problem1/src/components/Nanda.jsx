import {Link,Route,Routes} from "react-router-dom";
import Chandra from "./Chandra"
import Rocky  from "./Rocky";

const Nanda=()=>{
    return(
        <>
        <Link to="/chandra" style={{marginRight:100}}>Chandra</Link>
            <Link to="/rocky" style={{marginRight:100}}>Rocky</Link>
        
            
            <br></br>
            <Routes>
               <Route path="/chandra" element={<Chandra></Chandra>}></Route>
               <Route path="/rocky" element={<Rocky></Rocky>}></Route>
             
            </Routes>
    
        </>
    )
}
export default Nanda;