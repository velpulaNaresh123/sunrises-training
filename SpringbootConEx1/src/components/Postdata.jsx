import { useState,useEffect, useRef } from "react";
import axios from "axios"
const Postdata=()=>{
    const pname=useRef(null);
    const ptype=useRef(null);
    const pcategory=useRef(null);
    const price=useRef(null);
    const[res,setRes]=useState({});
    const func_one=async()=>{
         const {data} = await axios.post("http://localhost:2023/save/`");
    }

    return(
     <table>
        <tr>
            <td>Product Name</td>
            <td><input type="text" ref={pname}></input></td>   
        </tr>
        <tr>
        <td>Product Name</td>
        <td><input type="text" ref={ptype}></input></td> 
        </tr>
        <tr>
        <td>Product Category</td>
        <td><input type="text" ref={pcategory}></input></td> 
        </tr>
        <tr>
        <td>Base Price</td>
        <td><input type="number" ref={price}></input></td> 
        </tr>
        <tr>
            <td>
                <button onClick={func_one}>Click Here..!</button>
            </td>
        </tr>
     </table>


    )
}