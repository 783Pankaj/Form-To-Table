import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
const ContaninerPage=()=>{
    return(
        <div>
                <Link to="mainPage">Main Page</Link>   
                <Link to="FirstPage">First Page</Link>
                <Link to="SecondPage">second Page</Link>
                <Link to="ThreedPage">Threed Page</Link>
                <Link to="FourthPage">Fourth Page</Link>
                <Link to="Resultpage">Result Page</Link>
            
        </div>
    );
}
export default ContaninerPage;