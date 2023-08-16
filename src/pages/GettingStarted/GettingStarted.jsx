import React, { useEffect, useState } from 'react';

// Components
import MainButton from '../../components/buttons/MainButton';
import Notifications from '../../components/GettingStartedComponents/Notifications';
import Incomes from '../../components/GettingStartedComponents/Incomes';
import Expenses from '../../components/GettingStartedComponents/Expenses';

import './GettingStarted.css';
import {
  Button,
  Container,
  ButtonGroup
} from 'reactstrap';

export default function GettingStarted() {
  const [step, setStep] = useState(1);
  const [buttonText, setButtonText] = useState('Continue');

  useEffect(() => {
    if (step === 0 || step < 0) {
      setStep(1);
    } else if (step > 4) {
      setStep(4);
    }
    getTopButtonText(step);
    getBottomButtonText(step);
  }, [step]);

  function getTopButtonText(step) {
    switch (step) {
      case 1:
        return 'Allow Notifications';
      case 2:
        return 'Add Income';
      case 3:
        return 'Add Expense';
      case 4:
        return 'Continue';
      default:
        return 'Continue';
    }
  }
  function getBottomButtonText(step) {
    switch (step) {
      case 1:
        return 'Not Now';
      case 2:
        return 'Continue';
      case 3:
        return 'Continue';
      case 4:
        return 'Continue';
      default:
        return 'Continue';
    }
  }


  const handleAdd = () => {
    console.log('clicked')
    setStep(step + 1);
  }
  const handleBack = () => {
    setStep(step - 1);
  }

  console.log(step)

  return (
    <div className='GettingStartedContainer'>
      <div className='LogoContainer'>
        <img src="/images/svg/logo.png" alt="logo" />
        <div id='step-container'>
          <div id={`step-one`} style={{ backgroundColor: `${ step >= 1 ? 'green' : 'green'}` }}></div>
          <div id={`step-two`} style={{ backgroundColor: `${ step >= 2 ? 'green' : 'white'}` }}></div>
          <div id={`step-three`} style={{ backgroundColor: `${ step >= 3 ? 'green' : 'white'}` }}></div>
          <div id={`step-four`} style={{ backgroundColor: `${ step >= 4 ? 'green' : 'white'}` }}></div>
        </div>
        { step === 1 ? <Notifications /> :  null }
        { step === 2 ? <Incomes /> :  null }
        { step === 3 ? <Expenses /> :  null }
        { step === 4 ? <div>SELECT EXPENSE GOES HERE</div> :  null }
      </div>
    
    <div className="GettingStartedButtonGroup">

      { step < 4 ? 
        <MainButton color={'danger'} text={getTopButtonText(step)} click={handleAdd} />
      : null}

      <MainButton text={getBottomButtonText(step)} click={handleBack} />

    </div>
    </div>
  )
}