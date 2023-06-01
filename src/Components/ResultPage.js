import React from 'react'

const ResultPage = (props) => {
  return (
    <div className='first-page'>

      <h1>Your Result</h1>
      <h2>{props.ans}</h2>

    </div>
  )
}

export default ResultPage
