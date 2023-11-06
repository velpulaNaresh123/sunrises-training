import { useState } from "react";
const OnClickIncrement=()=>{
    const[num,setNum] =useState(0);

    const func_six=()=>{
        {
          return( setNum(num=>num+1)) 
        }
    }


    return(

        <>
        <h1>{num}</h1>
        <button onClick={func_six}>Increment</button>
        </>
    )
}
export default OnClickIncrement;