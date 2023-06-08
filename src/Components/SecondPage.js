// import React, { useState } from "react";
import { useNavigate} from "react-router";
// import ResultPage from "./ResultPage";

const SecondPage=()=>{
  // const [send, setSend] = useState({myData:''});
    const navigate = useNavigate();

    const Next=()=>{
      navigate("/threed")
    }

    // console.log("SEND",send);
    const Pre=()=>{
        navigate(-1)
      }
      
      // const onOptionChange=(e)=>{
      //   localStorage.setItem("myData",{...send,myData:e.target.value});
      //   setSend(e.target.value);
      // }
      // const secondQuestionSubmit=(e)=>{
      //   e.preventDefault();
       
      // }

    return(
        <div className="first-page">
          {/* <form onSubmit={secondQuestionSubmit}> */}
            <span className="question">Who created the first DBMS?</span><br />
            <input type="radio" value="option" name="option" />Edgar Frank Codd<br />
            <input type="radio" value="option" name="option" />Charles Bachman<br />
            <input type="radio" value="option" name="option" />Charles Babbage<br />
            <input type="radio" value="option" name="option" />Sharon B. Codd<br />
            <button onClick={()=>Pre()} className="pre-btn">Pre</button>
            <button onClick={()=>Next()} className="next-btn" type="next">Next</button>
            {/* </form> */}
        </div>
    );
}
export default SecondPage;