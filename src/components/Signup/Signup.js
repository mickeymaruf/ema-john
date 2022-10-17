import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {
    const { signUpWithEmail } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            console.log('password didn\'t match');
            return;
        }
        signUpWithEmail(email, password)
            .then(userCredential => {
                userCredential.user.displayName = name;
                console.log(userCredential.user);
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
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
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
                    Already have an account?  <Link style={{ color: "#FF9900" }} to='/login'>Login</Link>
                </p>
                <div className='or'>
                    <div className='or-border'></div>
                    <p>or</p>
                    <div className='or-border'></div>
                </div>
                <div>
                    <button className='form-btn' type="submit"><img className='google-icon' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;