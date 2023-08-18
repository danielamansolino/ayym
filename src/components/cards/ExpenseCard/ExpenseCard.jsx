import React from 'react';

// Styling Import
import './ExpenseCard.css';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
  
  } from 'reactstrap';

// Need to import account, expense, income, user?
export default function ExpenseCard({ budget, category, expenses }) {

    // Need to take in a expense object, either income or expense and display the information
  
    // Add different color, icon, or emoji depending on the type of expense, like income or expense
  

    // Group expenses by category
  const expensesByCategory = {};
  expenses.forEach((singleExpense) => {
    const category = singleExpense.category;
    if (!expensesByCategory[category]) {
      expensesByCategory[category] = [];
    }
    expensesByCategory[category].push(singleExpense);
  });



    return (
      <Container className="ExpenseCardContainer">
      <Row>
        <Col>
          <Card className="expenseCard">
            <div className="icon">
              <img src="/images/svg/expense_card_icon.png" alt="Expense Icon" style={{ width: '35px', height: '35px' }} />
              <div className="cardCategory">{category}</div>
            </div>
            {expenses.map((expense) => (
              <CardBody class="expenseCardBody" key={expense._id}>
                <Row>
                  <Col>
                    <div className="expenseAndAmount">
                      <div className="expenseDescription">{expense.description}</div>
                      <div className="expenseAmount">Amount: ${expense.amount}</div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

