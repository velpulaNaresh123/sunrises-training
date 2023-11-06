import axios from "axios";
import { useEffect,useRef,useState} from "react";
const UpdateEx1=()=>{
    const ref1=useRef(null)
    const ref2=useRef(null)
    const [res,setRes]=useState({})
    

   
    const update_data=async()=>{
        const {data}=await axios.post("https://reqres.in/api/register",{"email":ref1.current.value,"password":ref2.current.value});
        //  console.log(data)
         setRes(data);

    }

   const func_one=()=>{
    update_data();
   }


    return(
        <>
        Email<input type="email" ref={ref1}></input><br></br>
        Password<input type="password" ref={ref2}></input><br></br>
        <button onClick={func_one}>Click Me</button><br></br>
        <p>{JSON.stringify(res)}</p>

        </>
    )
}
export default UpdateEx1;