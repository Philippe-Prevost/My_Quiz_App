import React, { useState, useContext } from 'react';
import axios from "../axiosConfig"; 
import { QuizContext } from '../Helpers/Context';

const Register = () => {
  const { setGameState } = useContext(QuizContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkEmail = (users, emailToCheck) => {
    const user = users.find((user) => user.email === emailToCheck);
    return user;
  };

  const handleSubmit = async (e) => {
    const user = await axios
        .get("/users")
        .then((res) => checkEmail(res.data,email));

      if (user) {
        setError("User already exists!");
      } else {
        const newUser = { username, email, password };
        await axios.post("/users", newUser);
        alert("User created!");
        setGameState('quiz'); 
      }
    } 
  

  return (
    <div className='register-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h1>Register User</h1>
        <label>
          <input
            type='text'
            placeholder='Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
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
