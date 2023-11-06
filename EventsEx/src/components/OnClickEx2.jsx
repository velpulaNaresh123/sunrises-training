
const OnClickEx2=()=>{

       

        const func_three=(arg1,arg2)=>{
            arg1=="admin"&& arg2=="admin@123"?(console.log("login Success")):(console.log("login Fail"));
           
        }          
    return(
        <>
       
        <button onClick={()=>{func_three("admin","admin@123")}}>Button3</button>
        </>
    )
}
 export default  OnClickEx2;