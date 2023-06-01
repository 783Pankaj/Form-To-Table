import React from 'react'
import { useNavigate } from 'react-router';

const FourthPage = () => {
  const navigate = useNavigate();
    const Submit=()=>{
      navigate("/result")
    }
    const Pre=()=>{
        navigate(-1)
      }
    return(
        <div className="first-page">
            <span className="question">Which of the following is not a type of database?</span><br />
            <input type="radio" value="option1" name="option"/>Hierarchical<br />
            <input type="radio" value="option2" name="option"/>Network<br />
            <input type="radio" value="option3" name="option"/>Distributed<br />
            <input type="radio" value="option4" name="option"/>Decentralized<br />
            <button onClick={()=>Pre()} className="pre-btn">Pre</button>
            <button onClick={()=>Submit()} className="next-btn">Submit</button>
          
        </div>
    );
}

export default FourthPage
