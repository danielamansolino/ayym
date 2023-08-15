import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from 'reactstrap';

// Create a function to format the date as "YYYY-MM-DD"
function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
}

export default function IncomeForm({ user }) {

  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    type: '',
    recurring: false,
    amount: 0,
    date: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to the server
    console.log(formData);
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
        <Label>Amount</Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
          <Label>Date</Label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {formData.startDate && (
            <p>Formatted Date: {formatDate(formData.date)}</p>
          )}
        </FormGroup>

        <FormGroup>
        <Label>Recurring</Label>
        <Input
          type="checkbox"
          name="recurring"
          value={formData.recurring}
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