import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Link, useNavigate } from 'react-router-dom';
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const navigate = useNavigate();

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div className='EndScreen'>
      <h2>Your Score: {score} / {Questions.length}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <Link to="/" className='mainMenuLink'>Back to Main Menu</Link>
    </div>
  );
}

export default EndScreen;
