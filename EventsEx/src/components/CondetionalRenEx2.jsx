import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const CondetionalRenEx2=()=>{
   const [flag,setFlag]=useState(true);
   const func_one=()=>{

        setFlag(flag=>!flag);
   } 

    return(
        <>
        {
            flag?(<Comp1></Comp1>):(<Comp2></Comp2>)
        }
        <button onClick={func_one}>Change Component By Click</button>
        </>

    )
}
export default CondetionalRenEx2;