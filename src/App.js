import React, { useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import Register from './Components/Register';
import { QuizContext } from './Helpers/Context';
import './App.css';

function App() {
  const { gameState } = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}
      {gameState === 'register' && <Register />}
    </div>
  );
}

export default App;
