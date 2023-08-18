import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
  Button,
  Input,
} from 'reactstrap';

export default function BudgetPage({ user }) {
  const [budget, setBudget] = useState(null);
  const [income, setIncome] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

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

  const [editableBudgetId, setEditableBudgetId] = useState(null);
  const [editableBudgetValue, setEditableBudgetValue] = useState('');

  const handleEdit = (budgetId) => {
    setEditableBudgetId(budgetId);
    setEditableBudgetValue('');
  }

  return (
    <div className='BudgetPageContainer'>
      <h4>Budget</h4>
      {/* ... (other JSX) */}
      {budget ? 
        budget.map((budget) => (
          <Card className='BudgetCard' key={budget._id}>
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
                    {editableBudgetId === budget._id ? (
                      <Input
                        style={{ width: '100px', textAlign: 'right' }}
                        placeholder={budget.monthlyBudget}
                        type='number'
                        value={editableBudgetValue}
                        onChange={(e) => setEditableBudgetValue(e.target.value)}
                      />
                    ) : (
                      <div>${budget.monthlyBudget}</div>
                    )}
                  </div>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <div className='BudgetSpread'>
                    <Button
                      onClick={() => handleEdit(budget._id)}
                      style={{
                        backgroundColor: 'white',
                        border: 'none',
                        color: 'var(--mint)',
                        fontSize: '.75rem',
                        padding: '0',
                        margin: '0',
                      }}
                    >
                      Edit Budget
                    </Button>
                  </div>
                </tr>
              </tbody>
            </Table>
          </Card>
        ))
        : null }
    </div>
  );
}