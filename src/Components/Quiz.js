import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
  const { setGameState, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const handleNextQuestion = () => {
    const correctAnswer = Questions[currQuestion].answer;

    if (optionChosen === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currQuestion < Questions.length - 1) {
      setCurrQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setGameState('endScreen');
    }
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen('A')}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen('B')}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen('C')}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen('D')}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      <button onClick={handleNextQuestion}>
        {currQuestion === Questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
}

export default Quiz;
