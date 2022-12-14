import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { loginWithEmail } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email || !password) {
            setError('Field can\'t be empty!');
            return;
        }
        loginWithEmail(email, password)
            .then(userCredential => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className='mt-3'>
                    <input className='form-btn submit-btn' type="submit" value="Login" />
                </div>
                <p className='form-info'>
                    New to Ema-john? <Link className='login-link' to='/signup'>Create New Account</Link>
                </p>
                <div className='or'>
                    <div className='or-border'></div>
                    <p>or</p>
                    <div className='or-border'></div>
                </div>
                <div>
                    <button className='form-btn' type="submit"><img className='google-icon' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> Continue with Google</button>
                </div>
                {
                    error && <p className='error'>{error}</p>
                }
            </form>
        </div>
    );
};

export default Login;