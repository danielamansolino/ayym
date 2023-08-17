import React, { useEffect, useState } from 'react';

import BudgetForm from '../../components/forms/BudgetForm';
import MainButton from '../../components/buttons/MainButton';
import IncomeForm from '../../components/forms/IncomeForm';
import * as BudgetsAPI from '../../utilities/api/budgets-api';
import * as IncomesAPI from '../../utilities/api/incomes-api';

import './BudgetPage.css';
import {
  Card,
  CardTitle,
  CardBody,
  Table,
  Button
} from 'reactstrap';

export default function BudgetPage({ user }) {
  const [budget, setBudget] = useState(null);
  const [income, setIncome] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetchBudget();
    fetchIncome();
  }, [totalIncome]);

  const calculateTotalIncome = async () => {
    let total = 0;
    try {

      income.forEach((income) => {
        total += income.amount;
      });
      setTotalIncome(total);
    } catch (error) {
      console.error('Error calculating total income:', error);
    }
  }
  console.log(income)

  const fetchIncome = async () => {
    try {
      const fetchedIncome = await IncomesAPI.getIncomes();
      setIncome(fetchedIncome);
    } catch (error) {
      console.error('Error fetching income:', error);
    }
    calculateTotalIncome();
  }

  const fetchBudget = async () => {
    try {
      const fetchedBudget = await BudgetsAPI.getBudget();
      setBudget(fetchedBudget);
    } catch (error) {
      console.error('Error fetching budget:', error);
    }
  }

  console.log(budget)

  return (
    <div className='BudgetPageContainer'>
      <h4>Budget</h4>
      {/* <BudgetForm user={user} /> */}
      {/* <IncomeForm user={user} /> */}
    <div>
      ADD DATE DROPDOWN LIKE EXPENSE AND SOME SORT OF MONEY AVAILABLE?
    </div>
    <MainButton text='Add New Budget' color={'var(--mint)'} />
    <Card className='BudgetCard'>
    <Table borderless className='BudgetTable' >
      <thead>
        <tr>
          <th colSpan="2">
            Estimated Income
          </th>
        </tr>
      </thead>
      <tbody>
        {income ? (
          income.map((incomeItem) => (
            <tr key={incomeItem._id}>
              {/* <td>{incomeItem.type}</td>
              <td>{incomeItem.amount}</td> */}
              <div className='BudgetSpread'>
                <div>{incomeItem.type}</div>
                <div>{incomeItem.amount}</div>
              </div>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No income data available.</td>
          </tr>
        )}
      </tbody>
    </Table>
    </Card>
    { budget ? 
      budget.map((budget) => (
        <Card  className='BudgetCard' key={budget._id}>
          <Table borderless>
            <thead>
              <tr>
                <th colSpan="2">
                  {budget.category} Budget
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <div className='BudgetSpread'>
                <div>{budget.category}</div>
                <div>${budget.monthlyBudget}</div>
              </div>
              </tr>
            </tbody>
            <tbody>
              <tr>
              <div className='BudgetSpread'>
              <Button style={{
                backgroundColor: 'white',
                border: 'none',
                color: 'var(--mint)',
                fontSize: '.75rem',
                padding: '0',
                margin: '0',
              }}>Edit Budget</Button>
              </div>
              </tr>
            </tbody>
          </Table>
        </Card>
      ))
      : null }
    </div>
  )
}