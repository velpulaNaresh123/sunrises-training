import { useRef,useState } from "react";
const PrintSideBySide=()=>{
    const uname=useRef(null);
    const sname=useRef(null);
    const deg=useRef(null);
    const year=useRef(null);
    const[msg1,setMsg1]=useState(" ");
    const[msg2,setMsg2]=useState(" ");
    const[msg3,setMsg3]=useState(" ");
    const[msg4,setMsg4]=useState(" ");

    const func_two=()=>{

        setMsg1(uname.current.value);
        setMsg2(sname.current.value);
        setMsg3(deg.current.value);
        setMsg4(year.current.value);
    }


    return(
       <>
        <div className="row" >
             <div className="col" >
             <h1>Details</h1>
              Name<input type="text" ref={uname}></input>
              <br></br><br></br>
              SurName<input type="text" ref={sname}></input>
              <br></br><br></br>
              Degree<input type="text" ref={deg}></input>
              <br></br><br></br>
              Pass out Year<input type="number" ref={year}></input>
              <br></br><br></br>
              <button onClick={func_two}>Display</button>

             </div>
            

            <div className="col">
            <p>{uname}</p>
            <p>{sname}</p>
            <p>{deg}</p>
            <p>{year}</p>
               


            </div>



        </div>

       
       </>
    
    )
}
export default PrintSideBySide;