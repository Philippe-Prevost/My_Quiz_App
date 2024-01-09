import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div className='Menu'>
      <Link to="/quiz" className='quizButton'>Start Quiz</Link>
      <Link to="/register" className='quizButton'>Register</Link>
      <Link to="/login" className='quizButton'>Login</Link>
    </div>
  );
}
