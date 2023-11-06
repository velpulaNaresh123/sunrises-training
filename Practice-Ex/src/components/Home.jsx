import { useState } from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Login from "./Login";
import { Route,Routes } from 'react-router-dom'
import Success from "./Success";
import Error from "./Error";

const Home=()=>{
    const[res,setRes]=useState(" ");

    const dash1=()=>{
         setRes("Button Clicked...!");
    }
    const dash2=()=>{
        setRes("Button DoubleClicked...!")
   }


    return(
        <>
        <Dashboard1></Dashboard1>
        <h1>Welcome To Home Page</h1>
        <button onClick={dash1} onDoubleClick={dash2}>Right Dash</button>
        
        <Dashboard2 res={res}></Dashboard2>
        <Routes>
            <Route path="" element={<Login></Login>}></Route>
            <Route path="/dashboard" element={<Success></Success>}></Route>
            <Route path="/Error" element={<Error></Error>}></Route>
        </Routes>
        </>
    )

}
export default Home;