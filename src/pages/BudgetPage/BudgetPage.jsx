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
} from 'reactstrap';

export default function BudgetPage({ user }) {
  const [budget, setBudget] = useState(null);
  const [income, setIncome] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetchBudget();
    fetchIncome();
    calculateTotalIncome();
  }, []);

  const calculateTotalIncome = () => {
    let total = 0;
    income.forEach((income) => {
      total += income.amount;
    });
    setTotalIncome(total);
  }
  console.log(totalIncome)

  const fetchIncome = async () => {
    try {
      const fetchedIncome = await IncomesAPI.getIncomes();
      setIncome(fetchedIncome);
    } catch (error) {
      console.error('Error fetching income:', error);
    }
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
    <div>
      {/* <BudgetForm user={user} /> */}
      <IncomeForm user={user} />
    <div>Budget Page</div>
    <MainButton text='Add New Budget' color={'var(--mint)'} />
    <Card>
      <CardBody>
        <div>Estimated Income</div>
        <div>{totalIncome}</div>
      </CardBody>
    </Card>
    { budget ? 
      budget.map((budget) => (
        <Card key={budget._id}>
          <CardBody>
            <div className='BudgetCard'>
              {budget.category} Budget
              {budget.monthlyBudget}
            </div>
          </CardBody>
        </Card>
      ))
      : null }
    </div>
  )
}