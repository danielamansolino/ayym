import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Styling Import
import "./ExpensePage.css";

// Components
import ExpenseCard from "../../components/cards/ExpenseCard/ExpenseCard";
import MonthlyBudget from "../../components/cards/MonthlyBudget/MonthlyBudget";
import MonthlyBudgetAvailable from "../../components/cards/MonthlyBudget/MonthlyBudgetAvailable";
import ExpenseForm from "../../components/forms/ExpenseForm";
import BudgetCard from "../../components/cards/BudgetCard/BudgetCard";

//API for Expenses
import { listExpenses } from "../../utilities/api/expenses-api";
import { getBudget } from "../../utilities/api/budgets-api";

export default function ExpensePage({ expense, user }) {
  //   const [hideForm, setHideForm] = useState(false);
  // Create an array of years from 2000 to 2023
  const years = Array.from({ length: 2024 - 2000 }, (_, index) => 2000 + index);

  // Created an array of names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Initialize state for selected year and month
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(0);

  //Use State for Expenses
  const [expenses, setExpenses] = useState([]);

  //User State for Budget
  const [monthlyBudget, setMonthlyBudget] = useState(null);

  //Fetch a list of expenses
  useEffect(() => {
    async function fetchExpenses() {
      try {
        const fetchedExpenses = await listExpenses();
        setExpenses(fetchedExpenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }

    fetchExpenses();
  }, []);

  //Get the total amount for each Expense
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  //Monthly Available Budget
  const [percentage, setPercentage] = useState(0);

  //Expenses by Category
  const expensesByCategory = {};
  expenses.forEach((expense) => {
    const category = expense.category;
    if (!expensesByCategory[category]) {
      expensesByCategory[category] = [];
    }
    expensesByCategory[category].push(expense);
  });

  //Fetch Monthly Budget
  useEffect(() => {
    async function fetchMonthlyBudget() {
      try {
        const fetchedBudgets = await getBudget();
        if (fetchedBudgets && fetchedBudgets.length > 0) {
          const userBudget = fetchedBudgets.find(
            (budget) => budget.user === user._id
          );
          if (userBudget) {
            setMonthlyBudget(userBudget.monthlyBudget);
          }
        }
      } catch (error) {
        console.error("Error fetching budget:", error);
      }
    }

    fetchMonthlyBudget();
  }, [user]);

  //Calculate the Active Budget
  const activeBudget =
    monthlyBudget !== null ? monthlyBudget - totalExpense : null;

  // Filter expenses based on selected month and year
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getFullYear() === selectedYear &&
      expenseDate.getMonth() === selectedMonth
    );
  });

  return (
    <>

    {/* Green Add Expenses Button */}
      <Link to="/new">
        <button className="expenseButton">+</button>
      </Link>

    {/* Yellow Back Button */}
    <Link to="">
        <button className="expenseButtonYellow">-</button>
      </Link>

      <h1 className="expensesTitle">Expenses</h1>

      {/* Select for Filter by Months */}
      <div>
        <select
          id="month"
          value={`${selectedYear}-${selectedMonth + 1}`}
          onChange={(e) => {
            const [year, month] = e.target.value.split("-");
            setSelectedYear(Number(year));
            setSelectedMonth(Number(month) - 1);
          }}
          className="custom-select" // Add a class name for styling
        >
          {years.map((year) =>
            monthNames.map((monthName, index) => (
              <option
                key={`${year}-${index + 1}`}
                value={`${year}-${index + 1}`}
              >
                {monthName} {year}
              </option>
            ))
          )}
        </select>
      </div>

      {/* Total Expenses */}
      <div className="totalExpense">${totalExpense}</div>

      {/* Budget Card */}
      <BudgetCard monthlyBudget={monthlyBudget} activeBudget={activeBudget} />

      {/* Monthly Budget Available*/}
      {/* <MonthlyBudgetAvailable/> */}

      <div>
        {Object.entries(expensesByCategory).map(
          ([category, categoryExpenses]) => (
            <ExpenseCard
              key={category}
              category={category}
              expenses={categoryExpenses}
            />
          )
        )}
      </div>
    </>
  );
}
