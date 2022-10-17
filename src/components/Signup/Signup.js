import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleSignup = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (!email || !password || !confirmPassword) {
            setError('Field can\'t be empty!');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password didn\'t match');
            return;
        }
        createUser(email, password)
            .then(userCredential => {
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className='form-control'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>
                <div className='mt-3'>
                    <input className='form-btn submit-btn' type="submit" value="Sign Up" />
                </div>
                <p className='form-info'>
                    Already have an account?  <Link className='login-link' to='/login'>Login</Link>
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

export default Signup;