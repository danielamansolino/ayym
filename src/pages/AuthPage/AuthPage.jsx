import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';
import { Button } from 'reactstrap';

export default function AuthPage({ setUser }) {
  const [userPref, setUserPref] = useState('view');
  const [formType, setFormType] = useState('signup');

  function handleSignUp() {
    setUserPref('signup');
    setFormType('signup');
  }

  function handleSignIn() {
    setUserPref('login');
    setFormType('login');
  }

  return (
    <div className="auth-page-container">
      <div className="app-logo-container">
        <a href="https://imgur.com/GUCAUR9.png" target="_blank" rel="noopener noreferrer">
          <img src="https://imgur.com/GUCAUR9.png" alt="Logo Ayym" className="app-logo" />
        </a>
      </div>

      {userPref === 'view' && (
        <div className="auth-content">
          <h4>Take charge of your money game like a pro with this budgeting app.</h4>
          <br />
          <br />
          <h4>Your ticket to financial success!</h4>
          <a href="https://imgur.com/CLCmr7K.png" target="_blank" rel="noopener noreferrer">
          <img src="https://imgur.com/CLCmr7K.png" alt="Image Ayym" className="app-image" />
          </a>
          <br />
          <br />
          <Button onClick={handleSignUp} className="x" size="lg" block>Get Started</Button>
          <p>
            Already have an account?{' '}
            <span onClick={handleSignIn} className="clickable-text">
              Sign In
            </span>
          </p>
        </div>
      )}

      {userPref === 'signup' && (
        <div className="form-container">
          <h2>Create your account.</h2>
          <SignUpForm setUser={setUser} />
          <p>
            Already have an account?{' '}
            <span onClick={handleSignIn} className="clickable-text">
              Sign In
            </span>
          </p>
        </div>
      )}

      {userPref === 'login' && (
        <div className="form-container">
          <h2>Welcome to AYYM!</h2>
          <LoginForm setUser={setUser} />
          <p>
            Don’t have an account?{' '}
            <span onClick={handleSignUp} className="clickable-text">
              Sign Up
            </span>
          </p>
    
        </div>
      )}

    </div>
  );
}

