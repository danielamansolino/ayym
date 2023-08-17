import React, { useEffect, useState } from 'react';

import BudgetForm from '../../components/forms/BudgetForm';
import * as BudgetsAPI from '../../utilities/api/budgets-api';

import './BudgetPage.css';

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
    { budget ? 
      budget.map((budget) => (
        <div key={budget._id}>
          <div>{budget.category}</div>
          <div>{budget.monthlyBudget}</div>
          </div>
      ))
      : null }
    </div>
  )
}