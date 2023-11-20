import React, { useState } from 'react';

import * as ProfilesAPI from '../../utilities/api/profiles-api';
import * as BudgetsAPI from '../../utilities/api/budgets-api';

import MainButton from '../buttons/MainButton';

// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default function ProfileForm({ user }) {
  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    firstName: '',
    lastName: '',
    age: '',
    isStudent: false,
    school: '',
    isEmployed: false,
    occupation: '',
    workHours: '',
    salary: '',
    location: '',
    bio: '',
  });

  const [budgetData, setBudgetData] = useState({
    user: user._id ? user._id : '',
    monthlyBudget: 0,
  });

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setBudgetData({
      ...budgetData,
      [name]: fieldValue,
    });
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to the server
    try {
      await ProfilesAPI.createProfile(formData);
      await BudgetsAPI.createBudget(budgetData);
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  };
  
  return (
    <Container>
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Monthly Budget</Label>
        <Input
          type="number"
          name="monthlyBudget"
          value={budgetData.monthlyBudget}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Age</Label>
        <Input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Student</Label>
        <Input
          type="checkbox"
          name="isStudent"
          value={formData.isStudent}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Employed</Label>
        <Input
          type="checkbox"
          name="isEmployed"
          value={formData.isEmployed}
          onChange={handleChange}
        />
      </FormGroup>

      
      <MainButton text={'Continue'} click={handleSubmit}></MainButton>
    </Form>
  </Container>
  )
}