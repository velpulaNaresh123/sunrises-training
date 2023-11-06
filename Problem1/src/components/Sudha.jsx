import {Link,Route,Routes} from "react-router-dom";
import Narayan from "./Narayan";
import Nanda from "./Nanda";
import Ratan from "./Ratan";
const Sudha=()=>{

return(
    <>

     <Link to="/narayan" style={{marginRight:100}}>narayan</Link>
            <Link to="/nanda" style={{marginRight:100}}>nanda</Link>
            <Link to="/ratan" style={{marginRight:100}}>ratan</Link>
            
            <br></br>
            <Routes>
                
               <Route path="/narayan" element={<Narayan></Narayan>}></Route>
               <Route path="/nanda" element={<Nanda></Nanda>}></Route>
               <Route path="/ratan" element={<Ratan></Ratan>}></Route>
            </Routes>
    
    </>
)
}
export default Sudha;