import React, { useState } from 'react';

// API Imports
import * as accountsApi from '../../utilities/api/accounts-api';

// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from 'reactstrap';

export default function AccountForm({ user }) {

  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    type: '',
    balance: 0,
    isPrimary: false,
    expense: null,
    income: null,
  });

  console.log(user)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  // Async function to create the new account
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to the server or console.log test
    console.log(formData);
    try {
      await accountsApi.createAccount(formData);
    } catch (error) {
      console.error('There was an error at createAccount', error);
    }
  };
  
  return (
    <Container>
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Label>Type</Label>
        <Input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Balance</Label>
        <Input
          type="number"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Primary Account</Label>
        <Input
          type="checkbox"
          name="isPrimary"
          value={formData.isPrimary}
          onChange={handleChange}
        />
      </FormGroup>
      
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  </Container>
  )
}