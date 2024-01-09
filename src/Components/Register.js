import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from "../Helpers/QuestionBank"
import "../App.css";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    return (
        <div className='container'>
            <form className='form-container'>
                <h1>Register User</h1>
                <label>
                    <input type='text'
                        placeholder='Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    <input type='text'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <input type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className='btn' type="submit" >
                    <p>Register</p>
                </button>
            </form>
        </div>
    );
};

export default Register;