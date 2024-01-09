// Context.js

import { createContext, useState } from 'react';

export const QuizContext = createContext({
  gameState: '',
  setGameState: () => {},
  score: 0,
  setScore: () => {},
});

export const QuizProvider = ({ children }) => {
  const [gameState, setGameState] = useState('menu'); 
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
};
