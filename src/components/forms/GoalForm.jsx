import React, { useState } from 'react';
import * as GoalsAPI from './../../utilities/api/goals-api';
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

export default function GoalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    targetAmount: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       title: '',
//       targetAmount: '',
//       startDate: '',
//       endDate: '',
//     });
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the formData, e.g., send it to the server
    try {
      await GoalsAPI.createGoals(formData); // Replace with the actual API method you're using
      console.log('Data submitted successfully', formData);
    } catch (err) {
      console.log(err);
    }
    
    // Clear form data
    setFormData({
      title: '',
      targetAmount: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Target Amount</Label>
          <Input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Start Date</Label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          {formData.startDate && (
            <p>Formatted Start Date: {formatDate(formData.startDate)}</p>
          )}
        </FormGroup>

        <FormGroup>
          <Label>End Date</Label>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
          {formData.endDate && (
            <p>Formatted End Date: {formatDate(formData.endDate)}</p>
          )}
        </FormGroup>

        <Button color="primary" type="submit">
          Save Goal
        </Button>
      </Form>
    </Container>
  );
}
