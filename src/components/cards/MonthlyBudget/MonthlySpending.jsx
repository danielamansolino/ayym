import React, { useState, useEffect } from 'react';

// Style Imports
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from 'reactstrap';

export default function MonthlySpending({ budget }) {
  const [activeBudget, setActiveBudget] = useState(null)

  useEffect(() => {
    setActiveBudget(budget)
  }, [budget])


  return (
    <Container>
      <Card>
        <CardTitle>Monthly Spending</CardTitle>
        <CardBody>
          { budget ? budget.map((b) =>
          <div key={budget._id}>
            <p>{b.monthlyBudget}</p>
          </div>
          ) : 
          <div>
            <p>Cash</p>
            <p>Card</p>
            <p>Transportation</p>
            <p>Bills</p>
          </div> }
        </CardBody>
      </Card>
    </Container>
  )
}