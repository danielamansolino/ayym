import React, { useState } from 'react';
import MonthlyBudgetAvailable from '../../components/cards/MonthlyBudget/MonthlyBudgetAvailable';
import * as budgetsApi from '../../utilities/api/budgets-api'

const ExpenseOverviewPage = () => {
    const [expenses, setExpenses] = useState();
    async function getBudget() {
        try {
          const response = await budgetsApi.getBudget();
          console.log(response, " data");

        } catch (err) {
          console.log(err.message, " this is the error in getPosts");
        }
      }
  return (
    <div>
      <h1>Expense Overview</h1>
      <ul>
        {expenses.map(expense => (
          <MonthlyBudgetAvailable budget={budget} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseOverviewPage;
