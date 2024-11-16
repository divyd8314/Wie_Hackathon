// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState('');
    const [isLocked, setIsLocked] = useState(false);

    const isValidEmail = (email) => {
        return email.toLowerCase().match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setError('Please enter a valid Gmail address');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // For signup
        if (!isLogin) {
            // Here you would typically make an API call to create the account
            console.log('Account created successfully');
            onLogin(email);
            return;
        }

        // For login
        if (password === 'correctpassword') {
            onLogin(email);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            
            if (newAttempts >= 5) {
                setIsLocked(true);
                setError('Account locked after 5 failed attempts. Please contact support.');
            } else {
                setError(`Invalid password. ${5 - newAttempts} attempts remaining.`);
            }
            setPassword('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@gmail.com"
                            disabled={isLocked}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            disabled={isLocked}
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                            />
                        </div>
                    )}

                    {error && (
                        <div className="error-message">
                            <span>{error}</span>
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={isLocked}
                        className={isLocked ? 'disabled' : ''}
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>

                    <div className="switch-form">
                        <button 
                            type="button" 
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError('');
                                setPassword('');
                                setConfirmPassword('');
                            }}
                            className="switch-button"
                        >
                            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;