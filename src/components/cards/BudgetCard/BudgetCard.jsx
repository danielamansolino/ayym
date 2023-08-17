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

export default function BudgetCard() {
  return (
    <>
    <Container className="budgetCard">
      <Card>
        <div className="budgetCardTitleContainer">
        <div>Available Amount</div>
        <div>Monthly Budget</div>
        </div>
        <div className="budgetCardBody">
        <div>$100</div>
        <div>$300</div>
        </div>
      </Card>
    </Container>
    </>
  )
}
