import React from "react";
import './Masterhome.css'
import Laptop from "./laptop";
import Lapimg from '../images/Lapimg.jpeg';
import Mobile from '../images/Mobile.jpeg';
import Shoe from '../images/Shoe.jpeg';
import {Link, Route, Routes} from 'react-router-dom'
const Masterhome=()=>{
    return(

        <>
        <div className="c1">
        <h1>Left DashBoard</h1>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Aliquam expedita alias 
             voluptatibus magnam nisi, doloribus illo dicta,
              repellendus aliquid magni porro numquam possimus 
              dolor ducimus atque exercitationem illum optio quia?</p>
              <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Aliquam expedita alias 
             voluptatibus magnam nisi, doloribus illo dicta,
              repellendus aliquid magni porro numquam possimus 
              dolor ducimus atque exercitationem illum optio quia?</p>
        </div>
        <div className="c2">
        <h1>Home Page</h1>
        </div>
        <div className="c3">
        <h1>Right DashBoard</h1>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Aliquam expedita alias 
             voluptatibus magnam nisi, doloribus illo dicta,
              repellendus aliquid magni porro numquam possimus 
              dolor ducimus atque exercitationem illum optio quia?</p>
              <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Aliquam expedita alias 
             
             voluptatibus magnam nisi, doloribus illo dicta,
              repellendus aliquid magni porro numquam possimus 
              dolor ducimus atque exercitationem illum optio quia?</p>
        </div>
        <div className="c4">
           <div className="c41">
           <h3>Laptop</h3>
           <Link to="/l1"><img src={Lapimg} alt="Image Description" /></Link>
            

           </div>
           <div className="c42">
           <h3>Mobile</h3>
            <img src={Mobile} alt="Image Description" />
        
           </div>
           <div className="c43">
           <h3>Shoe</h3>
            <img src={Shoe} alt="Image Description" />
        
           </div>
           <div>

           </div>

        </div>
        
        </>
        
        
    )

}
export default Masterhome;
