import React, { useState, useEffect } from 'react';

import * as BudgetsAPI from '../../utilities/api/budgets-api';

// Component Imports
import MonthlyBudget from '../cards/MonthlyBudget/MonthlyBudget';
import MonthlySpending from '../cards/MonthlyBudget/MonthlySpending';
import MonthlyBudgetAvailable from '../cards/MonthlyBudget/MonthlyBudgetAvailable';

// Style Imports
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from 'reactstrap';

export default function Budget() {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    BudgetsAPI.getBudget()
      .then(res => setBudget(res))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      {budget.map(budget => (
        <div key={budget.id}>{budget.monthlyBudget}</div>
      ))}
      <MonthlyBudgetAvailable budget={budget} />
      <MonthlySpending />
      <MonthlyBudget budget={budget} />
    </Container>
  )
}