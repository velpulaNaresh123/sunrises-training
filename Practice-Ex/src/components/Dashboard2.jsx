import { useState } from 'react';
import './Dashboard2.css';
const Dashboard2=(props)=>{
    const {res}=props;
   // const[str,setStr]=useState(k1);
    return(
        <>
        <div className="mystyle2">
        <h1>Right Dashboard</h1>
        <h3>{res}</h3>
        </div>
        </>
    )

}
export default Dashboard2;