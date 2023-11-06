import Global from "./Context";
import { useContext } from "react";

const Comp1=()=>{
    const str=useContext(Global);

    return(

          <>
          <h1>{str}</h1>
          </>

    )
}
export default Comp1;