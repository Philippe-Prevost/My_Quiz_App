import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import Register from './Components/Register';
import Login from './Components/login';
import { QuizProvider } from './Helpers/Context';
import './App.css';

function App() {
  return (
    <Router>
      <QuizProvider>
        <div className='App'>
          <h1>Quiz App</h1>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/endScreen" element={<EndScreen />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<MainMenu />} /> 
          </Routes>
        </div>
      </QuizProvider>
    </Router>
  );
}

export default App;
