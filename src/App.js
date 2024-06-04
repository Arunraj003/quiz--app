import React, { useState } from 'react';
import './App.css';
import Question from './question';
import Score from './score';

const questions = [
  {
    question: "What is the only continent with land in all four hemispheres?",
    answers: [
      { text: "America", correct: false },
      { text: "Africa", correct: true },
      { text: "Russia", correct: false },
      { text: "India", correct: false },
    ]
  },
  {
    question: "How many stars are on the Chinese flag?",
    answers: [
      { text: "6", correct: false },
      { text: "5", correct: true },
      { text: "3", correct: false },
      { text: "7", correct: false },
    ]
  },
  {
    question: "On what continent would you find the city of Baku ?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Antartica", correct: false },
      { text: "North America", correct: false },
      { text: "Asia", correct: true },
    ]
  },
  {
    question: "How many elements are in the periodic table? ",
    answers: [
      { text: "120", correct: false },
      { text: "131", correct: false },
      { text: "80", correct: false },
      { text: "118", correct: true },
    ]
  },
  {
    question: "Who penned the book 'Wings of Fire'? ",
    answers: [
      { text: "Arun Tiwari", correct: false },
      { text: "APJ Abdul Kalam", correct: false },
      { text: "APJ Abdul Kalam and Arun Tiwari.", correct: true },
      { text: "Rabindranath Tagore", correct: false },
    ]
  },
  {
    question: "Name the national bird of the United States of America? ",
    answers: [
      { text: "Bald Eagle", correct: true },
      { text: "Lion", correct: false },
      { text: "Kangaroo", correct: false },
      { text: "Tiger", correct: false },
    ]
  },
  {
    question: "Name the deepest ocean in the world? ",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Artic Ocean", correct: false },
    ]
  },
  {
    question: "Name the smallest bone in the human body? ",
    answers: [
      { text: "Arms", correct: false },
      { text: "Stapes", correct: true },
      { text: "Skull", correct: false },
      { text: "Soine", correct: false },
    ]
  },
  {
    question: "Name the gas which is filled in balloons? ",
    answers: [
      { text: "Hydrogen", correct: false },
      { text: "Carbon Monoxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: true },
    ]
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredStatus, setAnsweredStatus] = useState(new Array(questions.length).fill(false));
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));

  const handleAnswer = (isCorrect, answerText) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const newAnsweredStatus = [...answeredStatus];
    newAnsweredStatus[currentQuestionIndex] = true;
    setAnsweredStatus(newAnsweredStatus);

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerText;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnsweredStatus(new Array(questions.length).fill(false));
    setSelectedAnswers(new Array(questions.length).fill(null));
  };

  const handleReset = () => {
    setAnsweredStatus(new Array(questions.length).fill(false));
    setSelectedAnswers(new Array(questions.length).fill(null));
  };

  return (
    <div className="app">
      <h1>Simple Quiz</h1>
      {showScore ? (
        <Score
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <>
          <Question
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            onAnswerClick={(isCorrect, answerText) => handleAnswer(isCorrect, answerText)}
            isAnswered={answeredStatus[currentQuestionIndex]}
          />
          <div>
            <button
              className='prev'
              onClick={handlePrevClick}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              className='next'
              disabled={!answeredStatus[currentQuestionIndex]}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
            <button onClick={handleReset} className='restart'>Reset Quiz</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
