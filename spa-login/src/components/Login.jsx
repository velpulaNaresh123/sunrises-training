import { useRef } from "react" 
import {useNavigate} from "react-router-dom"
const Login=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const navigate=useNavigate();
    const login=()=>{
        ref1.current.value =="admin" && ref2.current.value =="admin@123"?navigate("/dashboard"):navigate("/error");
    }

   return(
    <>
      
    <div className="c1">
    <h1>Login Page</h1>
    UserName:<input type="text" ref={ref1}></input> <br></br><br></br>
    Password:<input type="password" ref={ref2}></input><br></br><br></br>
    <button onClick={login}>Login</button>
    </div> 
    </>
   )
   }
   export default Login;