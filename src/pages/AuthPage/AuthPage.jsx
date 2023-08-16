import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <main className="auth-page-container">
      <div className="auth-content">
        <h1>Take charge of your money game like a pro with this budgeting app.</h1>
        <p>Your ticket to financial success!</p>
        <p>Already have an account? <span onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Sign In' : 'Log In'}</span></p>
      </div>
      
      <div className="form-container">
        {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
      </div>
    </main>
  );
}
