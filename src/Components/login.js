import { useState } from "react";
import axios from "axios";
import App from "../App";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // check if user exist in db
    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
            console.log(user)
            if (user.email === email && user.password === password) return user;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("All fields are required");
        }

        
      }

    return (
        <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
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
            <p>Log in</p>
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    )
};

export default Login;