import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Toys from "./Toys";
import Cloths from "./Cloths";
import Electroniics from "./Electroniics";
import Kids from "./Kids";
import {Link,Route,Routes} from "react-router-dom"; 

const Home=()=>{

    return(
        <>
       <h1>Home Page</h1>
       <Link to="/Electronics" style={{marginRight:100}}>Electronics</Link>
       <Link to="/Kids" style={{marginRight:100}}>Kids</Link>

       <Routes>
      
       <Route path="/Electronics" element={<Electroniics></Electroniics>}></Route>
       <Route path="/Kids" element={<Kids></Kids>}></Route>
        
       <Route path="/Electronics/Mobiles" element={<Mobiles></Mobiles>}></Route>
       <Route path="/Electronics/Laptops" element={<Laptops></Laptops>}></Route>
       <Route path="/Kids/Toys" element={<Toys></Toys>}></Route>
       <Route path="/Kids/Cloths" element={<Cloths></Cloths>}></Route>



       </Routes>
       </>

    )
}
export default Home;