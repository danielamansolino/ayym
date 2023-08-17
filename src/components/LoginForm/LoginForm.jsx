import React, { useState } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import * as usersService from '../../utilities/users-service';

import '../../pages/AuthPage/AuthPage.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" value={credentials.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={credentials.password} onChange={handleChange} required />
          </FormGroup>
          <Button className='x' type="submit">LOG IN</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
