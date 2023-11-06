import { useRef,useState } from "react";
const Login=()=>{
    const uname=useRef(null);
    const upsw=useRef(null);
    const [res,setRes]=useState("");
    const func_one=()=>{

        uname.current.value=="nari"&& upsw.current.value=="123" ? (setRes("Login Success")):(setRes("Login Fail"));
    }



    return(
        <>
        <h1>Login Form</h1>
        <br></br><br></br>
        UserName<input type="text" ref={uname}></input>
        <br></br><br></br>
        password<input type="password" ref={upsw}></input>
        <br></br><br></br>
        <button onClick={func_one}>Login</button>
        <br></br><br></br>
        <h1>{res}</h1>
        </>
    )
}
export default Login;