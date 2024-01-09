import App from "../App";

const Login = () => {
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
    )
};

export default Login;