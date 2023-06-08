import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { optionAns } from './FirstPage';

const ResultPage = () => {
  const {ans} = useContext(optionAns);
  console.log(ans);
  const navigate = useNavigate();

  const tryAgain = () => {
    navigate('/');
  }

  return (
    <div className='first-page'>

      <h1>Your Result {ans}</h1>
      <button type='submit' onClick={tryAgain}>TryAgain</button>
    </div>
  )
}

export default ResultPage
