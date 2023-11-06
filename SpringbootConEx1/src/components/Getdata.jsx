import { useRef, useState } from "react";
import axios from "axios";
import Getone from "./Getone";
const Getdata=()=>{
     const[res,setRes] =useState([]);
     const ref1=useRef(null);

       const get_data=async()=>{
         const {data} = await axios.get(`http://localhost:2023/getall`);
        
        const arr=data;
        setRes(arr);
        // console.log(arr);

       }
       const func_one=()=>{
        get_data();
       }
    return(
        <>
        <Getone></Getone>
        Enter Product Id<input type="number" ref={ref1}></input>
        <button onClick={func_one}>Click Me To Get Details</button>
        <table cellPadding={10} cellSpacing={10} border={2}>
            <thead>
            <tr>
                <td>ProductId</td>
                <td>Product Name</td>
                <td>Product Type</td>
                <td>Product Category</td>
                <td>Product Price</td>
                <td>Discount Amount </td>
                <td>Charges
                <td>GST</td>
                    <td>Delivery</td>
                </td>
                
                
                <td>Final Price</td>
            </tr>
            </thead>
            <tbody>
            
                {
                    res.map((element,index)=>{
                        return(
                        <tr key={index}>
                            <td>{element.product_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_type}</td>
                            <td>{element.p_category}</td>
                            <td>{element.discount}</td>
                            <td>{element.p_price}</td>
                            <td>
                            <td>{element.charges.gst}</td>
                            <td align="center">{element.charges.delivery}</td>
                            </td>
                           
                            <td>{element.final_price}</td>
                            
                            
                        </tr>
                        )


                    })
                }
            
            </tbody>
            
            
        </table>
        </>
        
    )
}
export default Getdata;