import { useState } from "react"

const Comp11=()=>{

    const [str,setStr]=useState("Naresh");
    const [num,setNum]=useState(100);
    const [bool,setBool]=useState(true);
    const [arr,setArr]=useState([10,20,30,40,50]);
    const [obj,setObj]=useState({"Name1":"Naresh","Name2":"Anil"});
    const [emps,setEmps]=useState([{"p_id":"aaa","p_name":"p_one","p_sal":1000},
    {"p_id":"bbb","p_name":"p_two","p_sal":2000},
    {"p_id":"ccc","p_name":"p_three","p_sal":3000}])

    return(
         <>
          <h3>{str}</h3>
          <h2>{num}</h2>
          <h2>{JSON.stringify(bool)}</h2>
          {
            arr.map((element,index)=>{

              return(<h2 key={index}>{element}</h2>)  
            })
          }
      
           <h2>{obj.Name1}</h2>
           <h2>{obj.Name2}</h2>
          <>
          <table border={1} align="center" cellSpacing={10} cellPadding={12} >
            <thead>

                <tr>
                    <th>p_id</th>
                    <th>p_name</th>
                    <th>p_sales</th>
                    
                </tr>

            </thead>
            <tbody>
                {
                    emps.map((element,index)=>{
                 return(     <tr key={index}>
                        <th>{element.p_id}</th>
                        <th>{element.p_name}</th>
                        <th>{element.p_sal}</th>
                      </tr>)

                    })
                }
            </tbody>



          </table>
          
          </>
            

          </>
    )

}
export default Comp11;