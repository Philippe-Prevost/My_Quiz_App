import React, { useState, useContext } from 'react';
import axios from "../axiosConfig"; 
import { QuizContext } from '../Helpers/Context';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { setGameState } = useContext(QuizContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userExists = await axios.get("/users")
        .then((res) => res.data.some((user) => user.email === email));

      if (userExists) {
        setError("User already exists!");
      } else {
        const newUser = { email, password };
        await axios.post("/users", newUser);
        alert("User created!");
        setGameState('menu');
        navigate('/');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setError('Error registering user. Please try again.');
    }
  };

  return (
    <div className='register-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h1>Register User</h1>
        <label>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className='btn' type="submit">
          Register
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
