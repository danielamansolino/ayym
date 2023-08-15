import React from 'react';

// Component Import
import Transaction from '../Transaction/Transaction';
import ProfileForm from '../forms/ProfileForm';

// Style Imports
import './Account.css';
import {
  Container,
  Table,
  
} from 'reactstrap';

export default function Account({ user }) {

  // If all accounts are visible, show all accounts

  // If one account is selected, show only that account

  return (
    <>
    <ProfileForm user={user} />
    <Container>
    <div>This is the Account Component</div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Account</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Checking</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>Savings</td>
            <td>$100.00</td>
          </tr>
        </tbody>
      </Table>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </Container>
    </>
  )
}