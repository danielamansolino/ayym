// import { Component } from 'react';
// import { signUp } from '../../utilities/users-service';

// export default class SignUpForm extends Component {
//   state = {
//     // name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   };

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const {name, email, password} = this.state;
//       const formData = {name, email, password};
//       // The promise returned by the signUp service
//       // method will resolve to the user object included
//       // in the payload of the JSON Web Token (JWT)
//       const user = await signUp(formData);
//       this.props.setUser(user);
//     } catch {
//       // An error occurred
//       // Probably due to a duplicate email
//       this.setState({ error: 'Sign Up Failed - Try Again' });
//     }
//   };

//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             {/* <label>Name</label>
//             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> */}
//             <h2>Create your account.</h2>
//             <label>Email</label>
//             <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//             <br/><br/>
//             <label>Password</label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//             <br/><br/>
//             <label>Confirm</label>
//             <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <br/><br/>
//             <button type="submit" disabled={disable}>SIGN UP</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { signUp } from '../../utilities/users-service';

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
            <Button type="submit" disabled={disable}>SIGN UP</Button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
