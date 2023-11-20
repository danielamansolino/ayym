import React from 'react';

// Styling Import
import './Transaction.css';
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
export default function Transaction() {

  // Need to take in a transaction object, either income or expense and display the information

  // Add different color, icon, or emoji depending on the type of transaction, like income or expense

  return (
    <Container className="TransactionContainer">
      <Row>
        <Col>
        This is an example of a transaction
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