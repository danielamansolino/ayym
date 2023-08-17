import React, { useState } from 'react';

import * as ProfilesAPI from '../../utilities/api/profiles-api';

import MainButton from '../buttons/MainButton';

// Style Imports
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default function ProfileTwo({ user, step, setStep }) {
  const [formData, setFormData] = useState({
    user: user._id ? user._id : '',
    occupation: '',
    bio: '',
  });

  const [budgetData, setBudgetData] = useState({
    user: user._id ? user._id : '',
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
      await ProfilesAPI.updateProfile(formData);
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
    setStep(step + 1)
  };
  
  return (
    <div className='form-container'>
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Label>Occupation</Label>
        <Input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label>Bio</Label>
        <Input
          type="textarea"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </FormGroup>

      
      <MainButton text={'Continue'} click={handleSubmit}></MainButton>
    </Form>
  </div>
  )
}