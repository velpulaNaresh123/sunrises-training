import { useEffect,useState } from "react";
import axios from "axios";
const GetEx1=()=>{
     const [rec,setRec]=useState([]);
    const get_data=async()=>{

      const {data}= await axios.get("https://www.w3schools.com/angular/customers.php")
       const {records}=data;
      // console.log(records);
       setRec(records);
    }
    

    useEffect(()=>{
        get_data();

    },[])


    return(
        <>
        <table border={1} align="center" cellSpacing={10} cellPadding={10} >
         <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
            </tr>
         </thead>
         <tbody>
            {
                rec.map((element,index)=>{

                    return(
                        <tr key={index}>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
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
export default GetEx1;
