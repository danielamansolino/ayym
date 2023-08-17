import React, { useEffect, useState } from 'react';

// Components
import MainButton from '../../components/buttons/MainButton';
import Notifications from '../../components/GettingStartedComponents/Notifications';
import Incomes from '../../components/GettingStartedComponents/Incomes';
import Expenses from '../../components/GettingStartedComponents/Expenses';
import IncomeForm from '../../components/forms/IncomeForm';
import ExpenseForm from '../../components/forms/ExpenseForm';
import ProfileOne from '../../components/forms/ProfileOne'
import ProfileTwo from '../../components/forms/ProfileTwo'
import BudgetForm from '../../components/forms/BudgetForm'

import './GettingStarted.css';

export default function GettingStarted({ user }) {
  const [step, setStep] = useState(1);
  const [topButtonText, setTopButtonText] = useState('Continue');
  const [bottomButtonText, setBottomButtonText] = useState('Continue');
  const [showForm, setShowForm] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const [showTopButton, setShowTopButton] = useState(true);

  useEffect(() => {
    if (step === 0 || step < 0) {
      setStep(1);
    } else if (step > 7) {
      setStep(7);
    }

    if (step === 1) {
      // Profile Part 1
      console.log('Step One!')
      setShowForm(true)
      setShowTopButton(false);
      setShowBottomButton(false);
      setTopButtonText('Continue');
      setBottomButtonText('')

    } else if (step === 2) {
      // Profile Part 2
      console.log('Step Two!')
      setShowForm(true)
      setShowTopButton(false);
      setShowBottomButton(false);
      setTopButtonText('Continue');
      setBottomButtonText('')

    } else if (step === 3) {
      // Notification Step, Top and Bottom Button, No Form
      console.log('Step Five!');
      setShowTopButton(true);
      setShowBottomButton(true);
      setTopButtonText('Allow Notifications');
      setBottomButtonText('Not Now');
      
    } else if (step === 4) {
      // Income Step, Top and Bottom Button, No Form
      console.log('Step Four!');
      setShowTopButton(true);
      setShowBottomButton(true);
      setTopButtonText('Add Income');
      setBottomButtonText('Continue');

      
    } else if (step === 5) {
      // Income Form Step, No Buttons, Form Active
      console.log('Step Five!');
      setShowForm(true)
      setShowTopButton(false);
      setShowBottomButton(false);
      setTopButtonText('Continue');
      setBottomButtonText('')

    } else if (step === 6) {
      // Expense Step, Top and Bottom Button, No Form
      console.log('Step Six!');
      setShowTopButton(true);
      setShowBottomButton(true);
      setTopButtonText('Add Expense');
      setBottomButtonText('Continue');


    } else if (step === 7 ) {
      // Expense Form Step, No Buttons, Form Active
      console.log('Step Seven!');
      setShowForm(true)
      setShowTopButton(false);
      setShowBottomButton(false);
      setTopButtonText('Continue');
      setBottomButtonText('')

    }
  }, [step]);



  const handleAdd = () => {
    console.log('clicked this button try to display add income if it is step 2')
    setStep(step + 1);
  }
  const handleBack = () => {
    setStep(step - 1);
  }

  console.log(step)

  return (
    <div className='GettingStartedContainer'>

      { showForm ? null :
      <div className='LogoContainer'>
        <img src="/images/svg/logo.png" alt="logo" />
        <div id='step-container'>
          <div id={`step-one`} style={{ backgroundColor: `${ step >= 1 ? 'green' : 'green'}` }}></div>
          <div id={`step-two`} style={{ backgroundColor: `${ step >= 2 ? 'green' : 'white'}` }}></div>
          <div id={`step-four`} style={{ backgroundColor: `${ step >= 4 ? 'green' : 'white'}` }}></div>
          <div id={`step-six`} style={{ backgroundColor: `${ step >= 6 ? 'green' : 'white'}` }}></div>
        </div>
      </div>
      }

        { step === 1 ? <ProfileOne user={user} step={step} setStep={setStep}  /> :  null }
        { step === 2 ? <ProfileTwo user={user} step={step} setStep={setStep}  /> :  null }
        { step === 3 ? <Notifications /> :  null }
        { step === 4 ? <Incomes /> :  null }
        { step === 5 ?
        <>
        <IncomeForm user={user} step={step} setStep={setStep} /> 
        <BudgetForm user={user} step={step} setStep={setStep} />
        </>
        :  null }
        { step === 6 ? <Expenses /> :  null }
        { step === 7 ? <ExpenseForm user={user} step={step} setStep={setStep} />:  null }
    
    <div className="GettingStartedButtonGroup">
      


      {/* { step < 4 ? 
        <MainButton color={'danger'} text={topButtonText} click={handleAdd} />
        : null} */}

      {/* { step < 4 ? 
        <MainButton color={'danger'} text={getTopButtonText(step)} click={handleAdd} />
        : null} */}

      { showTopButton ? 
        <MainButton color={'success'} text={topButtonText} click={handleAdd} />
      : null}

      { showBottomButton ? 
      <MainButton color='danger' text={bottomButtonText} click={handleBack} />
      : null}

    </div>
    </div>
  )
}