import { useState } from "react";
const ConditionalRenderingEx1=()=>{
    const [str1,setStr1]=useState("Naresh");
    const [str2,setStr2]=useState("Naveen");
    const [flag,setFlag]=useState(true);
    const func_seven=()=>{

        setFlag(flag=>!flag)
    }


    return(
        <>
         {
            flag?(<h1>{str1}</h1>):(<h1>{str2}</h1>)
         }
         <button onClick={func_seven}>Change By Clicking</button>
         </>
    )
    }
    export default ConditionalRenderingEx1;