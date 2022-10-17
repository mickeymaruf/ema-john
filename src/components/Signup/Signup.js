import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="confirm_password" id="confirm_password" name="confirm_password" />
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