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

export default function MonthlyBudget({ budget, setStep }) {
  const [activeBudget, setActiveBudget] = useState(null)

  useEffect(() => {
    setActiveBudget(budget)
  }, [budget])


  return (
    <Container>
      <Card>
        <CardTitle>Monthly Budget</CardTitle>
        <CardBody>
          { budget ? budget.map((b) =>
          <div key={budget._id}>
            <p>{b.monthlyBudget}</p>
          </div>
          ) : 'Loading...' }
        </CardBody>
      </Card>
    </Container>
  )
}