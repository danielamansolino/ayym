import React, { useEffect, useState } from 'react';
// API Imports
import * as expensesApi from '../../utilities/api/expenses-api';

import SelectExpense from '../../components/forms/SelectExpense'
import MainButton from '../../components/buttons/MainButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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

export default function ExpenseForm({ user, hideForm }) {
  const [show, setShow] = useState(true);
  const [activeSelection, setActiveSelection] = useState(null);
  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    category: '',
    amount: '',
    paymentMethod: '',
    date: '',
    description: '',
  });
  const categoryOptions = ["Bills", "Personal", "Transport",  "Housing","Food",
  "Other"];
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSelection) {
      setFormData({
        ...formData,
        category: activeSelection,
      });
      setShow(false);
    }
    if (!hideForm) {setShow(false)};
  }, [activeSelection, setShow]);

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
    navigate('/')
  };

  return (
    <div className='form-container'>
    { show ?
      <div className='form-container'>
        <SelectExpense setShow={setShow} setActiveSelection={setActiveSelection} />
      </div>
      :
      <Form onSubmit={handleSubmit}>
      {/* <SelectExpense setShow={setShow} setActiveSelection={setActiveSelection} /> */}

      <FormGroup>
        <Label>Category</Label>
        <Input
          type="select"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option disabled>Select a category</option>
            {categoryOptions.map(option => (
              <option key={option} value={option} >{option}</option>
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

        
        <Button
          style={{
            margin:'3px',
            width: '100%',
            backgroundColor:'var(--mint)',
            color: 'white',
            border: 'none',
          }}
          onClick={handleSubmit}>
            Continue
        </Button>
      </Form>
  }
  </div>
  )
}