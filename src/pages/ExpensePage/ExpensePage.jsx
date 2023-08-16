import React, { useEffect, useState } from 'react';
// Styling Import
import './ExpensePage.css';

// Components
import ExpenseCard from '../../components/cards/ExpenseCard/ExpenseCard';



export default function ExpensePage() {

    // Create an array of years from 2000 to 2023
  const years = Array.from({ length: 2024 - 2000 }, (_, index) => 2000 + index);

  // Created an array of names 
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Initialize state for selected year and month
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  return (
    <>
    <div>Expenses</div>
    <div>
      <select
        id="month"
        value={`${selectedYear}-${selectedMonth + 1}`}
        onChange={(e) => {
          const [year, month] = e.target.value.split('-');
          setSelectedYear(Number(year));
          setSelectedMonth(Number(month) - 1);
        }}
      >
        {years.map((year) => (
          monthNames.map((monthName, index) => (
            <option key={`${year}-${index + 1}`} value={`${year}-${index + 1}`}>
              {monthName} {year}
            </option>
          ))
        ))}
      </select>
    </div>
    <div>Value for Total Expenses</div>
    <ExpenseCard/>
    <ExpenseCard/>
    <ExpenseCard/>
    </>
  )
}
