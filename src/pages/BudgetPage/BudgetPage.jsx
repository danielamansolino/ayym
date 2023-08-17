import React, { useEffect, useState } from 'react';

import BudgetForm from '../../components/forms/BudgetForm';
import MainButton from '../../components/buttons/MainButton';
import * as BudgetsAPI from '../../utilities/api/budgets-api';

import './BudgetPage.css';
import {
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';

export default function BudgetPage({ user }) {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetchBudget();
  }, []);

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
      <BudgetForm user={user} />
    <div>Budget Page</div>
    <MainButton />
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