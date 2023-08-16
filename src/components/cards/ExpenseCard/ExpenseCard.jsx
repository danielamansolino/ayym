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
export default function ExpenseCard({ budget }) {

    // Need to take in a expense object, either income or expense and display the information
  
    // Add different color, icon, or emoji depending on the type of expense, like income or expense
  
    return (
      <Container className="ExpenseCardContainer">
        <Row>
          <Col>
          <Card className="horizontal-card">
          <Row>
            <Col>
              <CardBody>
                Date goes here
              </CardBody>
            </Col>
            <Col>
              <CardBody>
                Account goes here
              </CardBody>
            </Col>
            <Col>
              <CardBody>
                Name goes here
              </CardBody>
            </Col>
            <Col>
              <CardBody>
                Amount goes here
              </CardBody>
            </Col>
          </Row>
        </Card>
          </Col>
        </Row>
      </Container>
    );
  }  

