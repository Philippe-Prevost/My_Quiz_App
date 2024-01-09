// Register.js

import React, { useState } from 'react';
import axios from "../axiosConfig"; 

const Register = ({ setGameState }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkEmail = (users, emailToCheck) => {
    const user = users.find((user) => user.email === emailToCheck);
    return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("/users");
      const user = checkEmail(res.data, email);

      if (user) {
        setError("User already exists!");
      } else {
        const newUser = { username, email, password };
        await axios.post("/users", newUser);
        alert("User created!");
        setGameState('quiz'); 
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setError(`Error creating user: ${error.message}`);
    }
  };

  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}>
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
