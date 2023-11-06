import Global from "./Context";
import Comp1 from "./Comp1";
const Comp2=()=>{

    return(
        <>
        <Global.Provider value="Sathya Technologies At Hyderabad">
            <Comp1></Comp1>
        </Global.Provider>
        </>
    )
}
export default Comp2;