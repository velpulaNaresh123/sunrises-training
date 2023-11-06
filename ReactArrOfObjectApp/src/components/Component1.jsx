import { useState } from "react"

const Component1=(()=>{

      const [objs,setObjs]=useState([{"p_id":111,"p_name":"p_one","p_cost":1000},
      {"p_id":211,"p_name":"p_two","p_cost":2000},
      {"p_id":311,"p_name":"p_three","p_cost":3000},
      {"p_id":411,"p_name":"p_four","p_cost":4000},
      {"p_id":511,"p_name":"p_five","p_cost":5000},
      {"p_id":611,"p_name":"p_six","p_cost":6000}])
 
      return(
      <table border={3} cellPadding={20} cellSpacing={20} align="center" >
        <thead>
            <tr>
               <th>p_id</th>
               <th>p_name</th>
               <th>p_cost</th>

            </tr>
        </thead>
        <tbody>
         {
           objs.map((element,index)=>{

            return(
                <tr key={{index}}>
                 <td>{element.p_id}</td>
                 <td>{element.p_name}</td>
                 <td>{element.p_cost}</td>

                </tr>



                 )

           })

         }



        </tbody>
      </table>





      )
        




})
export default Component1;