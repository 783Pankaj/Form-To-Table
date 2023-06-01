import React, { useState } from "react";
import {  useNavigate } from "react-router";
import ResultPage from "./ResultPage";
const Firstpage=()=>{
    const [ans, setAns] = useState("");
    const navigate = useNavigate();
    const Next=()=>{
      navigate("/second")
    }
    const Pre=()=>{
        navigate(-1)
      }
    const onOptioChange=(e)=>{
        setAns(e.target.value);
    }  
    return(
        <div className="first-page">
            <span className="question">What is the full form of DBMS?</span><br />
            <input type="radio" value="Database Management System" name="optionNa" id="optID"
               checked={ans==="Database Management System"}
               onChange={onOptioChange}/>Database Management System <br />

            <input type="radio" value="Database Management Service" name="option" id="optID"
               checked={ans==="Database Management Service"}
               onChange={onOptioChange}
            />Database Management Service<br />

            <input type="radio" value="Data of Binary Management System" name="option" id="optID"
             checked={ans==="Data of Binary Management System"}
             onChange={onOptioChange}
            />Data of Binary Management System<br />

            <input type="radio" value="Data Backup Management System" name="option" id="optID"
              checked={ans==="Data Backup Management System"}
              onChange={onOptioChange}
            />Data Backup Management System<br />

            <button onClick={()=>Pre()} className="pre-btn">Pre</button>
            <button onClick={()=>Next()} className="next-btn">Next</button>
            <p>
            Select topping <strong>{ans}</strong>
            </p> 
            <div>
            <ResultPage ans={ans}/>  
            </div>
                
        </div>
    );
}
export default Firstpage;