import { useRef } from "react";
import './Login.css'
import { Navigate, useNavigate } from "react-router-dom";
const Login=()=>{
  const name1=useRef(null);
  const psw=useRef(null);
  const navigate=useNavigate();

  const logindata=()=>{
     name1.current.value=="admin"&&psw.current.value=="admin123"?navigate("/dashboard"):navigate("/Error");

  }


    return(
        <>
        <div className="c1"><br></br>
            Name <input type="text" ref={name1}></input><br></br><br></br>
            Password<input type="password" ref={psw}></input><br></br><br></br>
            <button onClick={logindata}>Login</button><br></br><br></br>
        </div>
        </>
    )

}
export default Login;