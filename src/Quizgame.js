import React, { useState } from 'react';

const Quizgame = () => {
  // Define the quiz questions and answers
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Rome', 'Berlin'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
      answer: 'Mars',
    },
    // Add more questions here...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };
  console.log(score);

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          <p>Your score: {score}/{quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Quiz</h2>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{quizData[currentQuestion].question}</p>
          <form>
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Quizgame;
