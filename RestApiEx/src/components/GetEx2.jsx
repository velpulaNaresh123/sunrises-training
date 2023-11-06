import axios from "axios";
import { useRef } from "react";
import { useState,useEffect } from "react";
const GetEx2=()=>{

        const [rec,setRec]=useState([]);
        const ref1=useRef(null);


        const fun_one=()=>{
            get_data()
           }


           
       const get_data= async()=>{

         const {data:x}= await axios.get('https://reqres.in/api/users?page=${ref1.current.value}'); 
         const {data}=x 
         console.log(x);       
         setRec(data);
                 

       }
       
      

    return(
         <>
         Enter Page No.<input type="number" ref={ref1}></input>
         <button onClick={fun_one}>ClickMe</button>
         <table border={1} cellPadding={10} cellSpacing={10}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Avatar</td>
                </tr>
            </thead>
            <tbody>
                {
                    rec.map((element,index)=>{

                    return(
                        <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.first_name}</td>
                        <td>{element.last_name}</td>
                        <td>{element.email}</td>
                        <td>
                            <img src={element.avatar}></img>
                        </td>

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
export default GetEx2;