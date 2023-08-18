import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';
import { Button } from 'reactstrap';
import MainButton from '../../components/buttons/MainButton';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [userPref, setUserPref] = useState('view');
  const [formType, setFormType] = useState('signup');
  const navigate = useNavigate();

  function handleSignUp() {
    setUserPref('signup');
    setFormType('signup');
    navigate('/start')
  }

  function handleSignIn() {
    setUserPref('login');
    setFormType('login');
    navigate('/')
  }

  return (
    <div className="auth-page-container">
      <div className="app-logo-container">
        {/* <a href="https://imgur.com/GUCAUR9.png" target="_blank" rel="noopener noreferrer">
          <img src="https://imgur.com/GUCAUR9.png" alt="Logo_Ayym" className="app-logo" />
        </a> */}
        <Logo />
      </div>

      {userPref === 'view' && (
        <div className="auth-content">
          <h4>Take charge of your money game like a pro with this budgeting app.</h4>
          <br />
          <br />
          <h4>Your ticket to financial success!</h4>
          <a href="https://imgur.com/CLCmr7K.png" target="_blank" rel="noopener noreferrer">
          <img src="https://imgur.com/CLCmr7K.png" alt="Image_Ayym" className="app-image" />
          </a>
          <br />
          <br />
          <Button style={{ maxWidth: '500px', textAlign:'center' }} onClick={handleSignUp} className="x" size="lg" block>Get Started</Button>
          <p>
            <br />
            Already have an account?{' '}
            <span onClick={handleSignIn} className="clickable-text">
              Sign In
            </span>
          </p>
        </div>
      )}

      {userPref === 'signup' && (
        <div className="form-container">
          <h5>Create your account.</h5>
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
          <h4>Welcome to AYYM!</h4>
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

