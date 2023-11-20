import React, { useEffect, useState } from 'react';

import BudgetForm from '../../components/forms/BudgetForm';
import MainButton from '../../components/buttons/MainButton';
import IncomeForm from '../../components/forms/IncomeForm';
import * as BudgetsAPI from '../../utilities/api/budgets-api';
import * as IncomesAPI from '../../utilities/api/incomes-api';
import BudgetCard from '../../components/cards/BudgetCard/BudgetCard';
import { useNavigate } from 'react-router-dom';

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
  const [budgets, setBudgets] = useState(null);
  const [income, setIncome] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [editableBudgetId, setEditableBudgetId] = useState(null);
  const [editableBudgetValue, setEditableBudgetValue] = useState('');
  const navigate = useNavigate();

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
      setBudgets(fetchedBudget);
    } catch (error) {
      console.error('Error fetching budget:', error);
    }
  }

  const handleEdit = (budgetId) => {
    setEditableBudgetId(budgetId);
    setEditableBudgetValue('');
  }

  const handleUpdate = async (e, budgetId) => {
    console.log(budgetId)
    console.log('here', editableBudgetValue)
    try {
      await BudgetsAPI.updateBudget(budgetId, {
        monthlyBudget: editableBudgetValue,
      });
      fetchBudget();
    } catch (error) {
      console.error('Error updating budget:', error);
    }
    setEditableBudgetId(null);
    setEditableBudgetValue('');
  }

  const handleAdd = () => {
    navigate('/budgetform')
  }

  return (
    <div className='BudgetPageContainer'>
    <h4 className="budgetTitle">Budget</h4>
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
    <MainButton style={{ padding: '10px' }} className="mainButtonBudget"  text='Add New Budget' color={'var(--mint)'} click={handleAdd}/>
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
              <div className='BudgetSpread'>
                <div className='centered-row'>
                <div>{incomeItem.type}</div>
                <div className='centered-row'>{incomeItem.amount}</div>
                </div>
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
    {budgets ? 
        budgets.map((budget) => (
          <Card className='BudgetCard' key={budget._id}>
            {/* <BudgetCard budgets={budgets} /> */}
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
                      <>
                      <Input
                        style={{
                          backgroundColor: 'white',
                          width: '100px',
                          textAlign: 'right',
                        }}
                        type='number'
                        placeholder={budget.monthlyBudget}
                        value={editableBudgetValue}
                        onChange={(e) => setEditableBudgetValue(e.target.value)}
                        />
                        <Button
                          onClick={(e) => handleUpdate(e, budget._id)}
                        >Save</Button>
                      </>
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
  )
}