import React, { useState, useEffect } from 'react';

import * as IncomesAPI from '../../../utilities/api/incomes-api';

// Styling Import
import './IncomeCard.css';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Table,
    Button,
  
  } from 'reactstrap';

// Need to import account, expense, income, user?
export default function IncomeCard() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    IncomesAPI.getIncomes()
      .then((res) => {
        setIncomes(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddClick = (e) => {
    e.preventDefault();
    // This will need to direct the user to the IncomeForm
    console.log('Edit button clicked');
  };

  
    return (
      <Container className="IncomeCardContainer">
        <Row>
          <Col>
          This is an example of the IncomeCard
          <Card className="horizontal-card">
            <CardTitle tag="h5">Income</CardTitle>
            <CardBody>
              { incomes ? incomes.map((i) => (
                <Table borderless key={i.id}>
                  <tbody>
                    <tr style={{ display:'flex', justifyContent:'space-between', }}>
                      <td>{i.type}</td>
                      <td>{i.amount}</td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                </Table>
              )) : null }
              <Button onClick={handleAddClick}>Add</Button>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Button>Done</Button>
      </Container>
    );
  }  

