import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// Style Imports
import {
    Container,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    Button,
  } from 'reactstrap';
  

// Styling Import
import './BudgetCard.css';

export default function BudgetCard({ monthlyBudget, activeBudget }) {

  // Calculate the percentage of the active budget out of the monthly budget
  const percentage = monthlyBudget !== null ? (activeBudget / monthlyBudget) * 100 : 0;


  return (
    <Container className="budgetCardContainer">
        <Card className="budgetCard">
          <div className="budgetCardTitleContainer">
            <div className="budgetAvailableAmount">Available Amount</div>
            <div className="budgetMonthlyBudget">Monthly Budget</div>
          </div>
          <div className="budgetCardBody">
            <div className="activeMonthlyBudgetText">${activeBudget !== null ? activeBudget : 'Loading...'}</div>
            <div className="monthlyBudgetText"v>${monthlyBudget !== null ? monthlyBudget : 'Loading...'}</div>
          </div>

          {/* Progress Bar */}
          <div className="budgetProgressBar">
          <div
            className="progressBarFill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
          
        </Card>
      </Container>
  )
}
