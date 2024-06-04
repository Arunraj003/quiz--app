import React, { useState } from 'react';

function Question({ question, questionNumber, onAnswerClick }) {

  return (
    <div className='question'>
      <h2>{`Question ${questionNumber}`}</h2>
      <p>{question.question}</p>
      {question.answers.map((answer, index) => (
        <button id="btn" key={index}
          onClick={() => onAnswerClick(answer.correct)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
