import { useState } from "react";
const Comp111=()=>{

    const [arr,setArr]=useState(["ReactJs","Angular","NodeJs","MangoDB","JQuery"])
    return(
 
        <table border={1} cellPadding={12} cellSpacing={20} align="center">
           <thead>
            <tr>
                <th>sno</th>
                <th>Technologies</th>
            </tr>

           </thead>
           <tbody>
             {
              arr.map((element,index)=>{
                return(
                    <tr key={{index}}>
                       
                        <td>{index}</td>
                        <td>{element}</td>

                    </tr>
                )
              })

             }



           </tbody>

        </table>






    )




}
export default Comp111;
