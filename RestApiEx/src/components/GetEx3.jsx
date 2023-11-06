import axios from "axios";
import { useState,useRef,useEffect } from "react";

const GetEx3=()=>{
    const [res,setRes]=useState([]);
    const ref1=useRef(null);

      const func_one=()=>{
        get_info();

      }
    const get_info=async()=>{
            const {data:x} = await axios.get("http://reqres.in/api/unknown");    
            const {data}=x; 
            console.log(x);
            setRes(data);


    }
   

    return(
            <>
            Enter Page No<input type="number" ref={ref1}></input><br></br><br></br>
            <button onClick={func_one}>CLICK ME..!</button>
             <table border={1} align="center" cellPadding={10} cellSpacing={20}>
             <thead>
                <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Year</th>
                   <th>Color</th>
                   <th>pantone_value</th>

                </tr>
             </thead>
             <tbody>
                {
                    res.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.year}</td>
                                
                                <td>{element.name}</td>
                                
                                <td>{element.pantone_value}</td>
                            </tr>


                        )
                    })
                }
             </tbody>
             <tfoot></tfoot>
             </table>
            
            </>

    )
}
export default GetEx3; 