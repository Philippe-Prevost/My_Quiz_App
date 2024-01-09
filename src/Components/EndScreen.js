import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div className='EndScreen'>
      <h2>Your Score: {score}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
