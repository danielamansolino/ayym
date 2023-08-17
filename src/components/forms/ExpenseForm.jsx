import React, { useState } from 'react';
// API Imports
import * as expensesApi from '../../utilities/api/expenses-api';




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

export default function ExpenseForm({ user }) {
  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    category: '',
    amount: '',
    recurring: false,
    paid: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to the server
    try {
      await expensesApi.createExpense(formData);
    } catch (error) {
      console.error('There was an error at createExpense', error);
    }
  };

  const categoryOptions = ['Transportation', 'Bills', 'Services', 'Cash', 'Check', 'Clothing', 'CreditCard'];
  
  return (
    <div className='form-container'>
    <h4>Add your expenses</h4>
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
          type="checkbox"
          name="recurring"
          value={formData.recurring}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Paid</Label>
        <Input
          type="checkbox"
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
  </div>
  )
}