const OnDoubleClickEx2=()=>{

 const func_four=(arg1,arg2)=>{

       arg1=="admin"&& arg2=="admin@123"? console.log("Login Success"):console.log("Login Fail");
 }


return(
    <button onDoubleClick={()=>{func_four("admin","admin@123")}}>Button4</button>
)

}
export default OnDoubleClickEx2;