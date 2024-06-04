import React from 'react';

function Score({ score, totalQuestions, onRestart }) {
  return (
    <div>
      <h2>Your Score: {score} out of {totalQuestions}</h2>
      <button onClick={onRestart} className='restartlast'> Restart Quiz </button>
    </div>
  );

}

export default Score;
