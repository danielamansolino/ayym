import React, { useState, useEffect } from 'react';

// Style Imports
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Table,
  Row,
  Col,
  Progress,
} from 'reactstrap';

export default function MonthlyBudgetAvailable({ budget }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const percentageBar = () => {
      const totalBudget = budget.map((b) => b.monthlyBudget);
      let totalExpenses;
      if (budget) {
        totalExpenses = 10000; // Replace with the actual total expenses
      } else {
        totalExpenses = 0;
      }
      let p = (totalExpenses / totalBudget) * 100;
      setPercentage(p);
    };
    percentageBar();
  }, [budget]);

  // Need to take in the total monthly budget
  // Need to take in the total monthly expenses for all expenses
  return (
      <Container className="IncomeCardContainer">
        <Row>
          <Col>
          <Card className="horizontal-card">
            <CardBody>
              { budget ? budget.map((b) => (
                <Table borderless key={b.id}>
                  <thead>
                    <tr style={{ display:'flex', justifyContent:'space-between', }}>
                      <th>Available Amount</th>
                      <th>Monthly Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ display:'flex', justifyContent:'space-between', }}>
                      <td>Need function</td>
                      <td>{b.monthlyBudget}</td>
                    </tr>
                  </tbody>
                </Table>
              )) : null }
              <Progress
                className={"my-2"}
                color={percentage > 90 ? 'danger' : percentage > 70 ? 'warning' : 'success'}
                value={percentage}
              >
              </Progress>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
  )
}