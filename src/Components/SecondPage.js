import React from "react";
import { useNavigate} from "react-router";

const SecondPage=()=>{
    const navigate = useNavigate();
    const Next=()=>{
      navigate("/threed")
    }
    const Pre=()=>{
        navigate(-1)
      }
    return(
        <div className="first-page">
            <span className="question">Who created the first DBMS?</span><br />
            <input type="radio" value="option1" name="option"/>Edgar Frank Codd<br />
            <input type="radio" value="option2" name="option"/>Charles Bachman<br />
            <input type="radio" value="option3" name="option"/>Charles Babbage<br />
            <input type="radio" value="option4" name="option"/>Sharon B. Codd<br />
            <button onClick={()=>Pre()} className="pre-btn">Pre</button>
            <button onClick={()=>Next()} className="next-btn">Next</button>
          
        </div>
    );
}
export default SecondPage;