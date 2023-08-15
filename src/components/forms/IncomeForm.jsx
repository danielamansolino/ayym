import React, { useState } from 'react';

// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from 'reactstrap';

export default function IncomeForm({ user }) {

  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    source: '',
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
        <Label>Source</Label>
        <Input
          type="text"
          name="source"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Amount</Label>
        <Input
          type="text"
          name="balance"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Date</Label>
        <Input
          type="text"
          name="date"
          value={formData.date}
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