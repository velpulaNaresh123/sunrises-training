import {Link,Route,Routes} from "react-router-dom";
import Home from "./Home";
import TimeTable from "./TimeTable";
import LogOut from "./LogOut";
const Master=()=>{


    return(

        <>
        <Link to="/Home" style={{marginRight:100}}>Home</Link>
        <Link to="/TimeTable" style={{marginRight:100}}>TimeTable</Link>
        <Link to="/Logout" style={{marginRight:100}}>LogOut</Link>

        <h1>Place.........Holder</h1>


        <Routes>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/TimeTable" element={<TimeTable></TimeTable>}></Route>
          <Route path="/LogOut" element={<LogOut></LogOut>}></Route>


        </Routes>
        </>
    )
} 
export default Master;