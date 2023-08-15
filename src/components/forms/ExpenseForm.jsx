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

export default function ExpenseForm({ user }) {
  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    type: '',
    category: '',
    amount: '',
    recurring: '',
    paid: '',
    paymentMethod: '',
    date: '',
    description: '',
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
        <Label>Category</Label>
        <Input
          type="text"
          name="category"
          value={formData.category}
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
        <Label>Recurring</Label>
        <Input
          type="text"
          name="recurring"
          value={formData.recurring}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Paid</Label>
        <Input
          type="text"
          name="paid"
          value={formData.paid}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Payment Method</Label>
        <Input
          type="text"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
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

      <FormGroup>
        <Label>Description</Label>
        <Input
          type="text"
          name="description"
          value={formData.description}
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