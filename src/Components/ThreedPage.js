import React from 'react'
import { useNavigate } from 'react-router';

const ThreedPage = () => {
  const navigate = useNavigate();
    const Next=()=>{
      navigate("/fourth")
    }
    const Pre=()=>{
        navigate(-1)
      }
    return(
        <div className="first-page">
            <span className="question">Which type of data can be stored in the database?</span><br />
            <input type="radio" value="option1" name="option"/>Image oriented data<br />
            <input type="radio" value="option2" name="option"/>Text, files containing data<br />
            <input type="radio" value="option3" name="option"/>Data in the form of audio or video<br />
            <input type="radio" value="option4" name="option"/>All of the above<br />
            <button onClick={()=>Pre()} className="pre-btn">Pre</button>
            <button onClick={()=>Next()} className="next-btn">Next</button>
          
        </div>
    );
}

export default ThreedPage
