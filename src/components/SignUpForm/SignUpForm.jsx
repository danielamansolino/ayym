import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { signUp } from '../../utilities/users-service';
import MainButton from '../buttons/MainButton';

import '../../pages/AuthPage/AuthPage.css'

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { email, password } = this.state;
      const formData = { email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="confirm">Confirm</Label>
              <Input type="password" name="confirm" id="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </FormGroup>
            <Button className='x' type="submit" disabled={disable}>SIGN UP</Button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
