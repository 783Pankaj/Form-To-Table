import React, { useEffect, useState } from "react";

const Time=()=>{
    const [second, setSecond] = useState(59);
    const [minutes, setMinutes] = useState(5);

    useEffect(()=>{
      const timer = setTimeout(()=>{
          setSecond(second-1);
          if(second===1){
             setMinutes(minutes-1);
             setSecond(59);
          }
       },1000)
       return()=> clearInterval(timer);
     });
     if(minutes===0 && second===1){
         alert("Time is out ")
         setMinutes(5);
         setSecond(59);
     }
    return(
        <div>
              <h1>Timer</h1>
        <h2>{minutes <10 ? "0"+minutes : minutes}:{second<10 ? "0"+ second:second}</h2>
        </div>
    );
}
export default Time;