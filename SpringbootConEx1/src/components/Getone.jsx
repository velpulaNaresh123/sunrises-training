import { useRef, useState } from "react";
import axios from "axios";

const Getone=()=>{
    
     const[res,setRes] =useState({});
     const[cha,setCha]=useState({})
     const ref1=useRef(null);

       const get_data=async()=>{
         const {data} = await axios.get(`http://localhost:2023/getone/${ref1.current.value}`);
        
        const arr=data;
        setRes(arr);
        const {charges}=arr
        // console.log(arr);
        console.log(charges.gst);
        setCha(charges)
       

       }
       const func_one=()=>{
        get_data();
       }
    return(
        <>
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
                   <tr>
                            <td>{res.product_id}</td>
                            <td>{res.p_name}</td>
                            <td>{res.p_type}</td>
                            <td>{res.p_category}</td>
                            <td>{res.discount}</td>
                            <td>{res.p_price}</td>
                            <td><td>{cha.gst}</td>
                            <td>{cha.delivery}</td>
                            </td>
                            
                           
                            <td>{res.final_price}</td>
                            
                
                            </tr>

                    
                }
            
            </tbody>
            
            
        </table>
        </>
        
    )
}
export default Getone;