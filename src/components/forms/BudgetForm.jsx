import React, { useState } from 'react';
import * as BudgetsAPI from './../../utilities/api/budgets-api'
import { useParams, useNavigate } from 'react-router-dom';


import MainButton from './../../components/buttons/MainButton';

// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default function BudgetForm({ user, step, setStep }) {
  const categoryOptions = ['Transportation', 'Bills', 'Services', 'Cash', 'Check', 'Clothing', 'CreditCard'];
  const { budgetId } = useParams();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    category: '',
    monthlyBudget: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await BudgetsAPI.createBudget(formData);
    } catch (error) {
      console.error('There was an error at createAccount', error);
    }
    if (step <= 7) {
      setStep(step + 1)
    }
    navigate('/budgetpage')
  };
  
  return (
    <Container>
    <Form onSubmit={handleSubmit}>

    <FormGroup>
      <Label>Category</Label>
      <Input
        type="select"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select a category</option>
        {categoryOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Input>
    </FormGroup>

      <FormGroup>
        <Label>Budgeted Amount</Label>
        <Input
          type="number"
          name="monthlyBudget"
          value={formData.monthlyBudget}
          onChange={handleChange}
          required
        />
      </FormGroup>
      
      <MainButton color={'var(--mint)'} text={'Continue'} click={handleSubmit}></MainButton>
    </Form>
  </Container>
  )
}