import Login from "./Login";
import Error from "./Error";
import Dash from "./Dash";
import { Route,Routes } from "react-router-dom";

const Master=()=>{

    return(

        <>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/dashboard" element={<Dash></Dash>}></Route>
            <Route path="/error" element={<Error></Error>}></Route>

        </Routes>
        
        </>
    )
}
export default Master;