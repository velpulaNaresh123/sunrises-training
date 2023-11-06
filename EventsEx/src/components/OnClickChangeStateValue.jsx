import { useState } from "react";
const OnClickChangeStateValue=()=>{
    const[str,setStr]=useState("ReactJs");
    const [num,setNum]=useState(100);
     const func_five=()=>{
        setStr("Reactjs 18.x");
        setNum(300);
     }
    return(
        <>
        <h1>{str}</h1>
        <h1>{num}</h1>
        <button onClick={func_five}>Button5</button>
        </>
    )
}
export default OnClickChangeStateValue;