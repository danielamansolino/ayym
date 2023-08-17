import React, { useEffect, useState, useContext } from 'react';
import {DataContext} from '../../utilities/DataContext';

import * as BudgetsAPI from '../../utilities/api/budgets-api';

import './Statistics.css';
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

export default function Statistics() {
  const [percentage, setPercentage] = useState(0)
  const [budget, setBudget] = useState(null)
  // Testing Values
  const [percentages, setPercentages] = useState([50, 75, 30, 60, 100]); // Example percentage values
  const categories = [
    { name: "Bills", image: 'https://imgur.com/FO0Thjc.png' },
    { name: "Personal", image: 'https://imgur.com/UZqm54M.png' },
    { name: "Transport", image: 'https://imgur.com/YDPbaJU.png' },
    { name: "Housing", image: 'https://imgur.com/66UeV0x.png' },
    { name: "Food", image: 'https://imgur.com/hbfzKv2.png' },
    { name: "Other", image: 'https://imgur.com/YnkYjkb.png' },
  ];


  useEffect(() => {
    const percentageBar = () => {

      setPercentage(50);
    };
    percentageBar();
  }, [budget]);

  // Need to pull data for the following:
  // Expenses, Income, Monthly Budget

  const VerticalProgress = ({ percentage }) => {
    const progressBarStyle = {
      height: '200px',
      width: '15px',
      backgroundColor: 'white',
      position: 'relative',
    };
  
    const fillBarStyle = {
      height: `${percentage}%`,
      width: '100%',
      backgroundColor: percentage > 99 ? 'red' : percentage > 70 ? 'var(--gold)' : 'var(--mint)',
      position: 'absolute',
      bottom: '0',
      left: '0',
    };
  
    return (
      <div className='ProgressStyle' style={progressBarStyle}>
        <div style={fillBarStyle}></div>
      </div>
    );
  };

  return (
    <div className='StatisticsContainer'>
      <h1>Statistics</h1>

      <div className='StatisticGraphics'>
      <Row>
        {percentages.map((percentage, index) => (
          <Col key={index}>
            <Card style={{ border:'none' }} >
              <CardBody>
                <VerticalProgress percentage={percentage} />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <div className='StatsGraphicsKey'>
          <div className='StatsCircle' style={{ backgroundColor: 'var(--mint)' }}></div>
          <div className=''>Budgeted Amount</div>
          <div className='StatsCircle' style={{ backgroundColor: 'var(--gold)' }}></div>
          <div className=''>Actual Spending</div>
        </div>
      </div>
      </div>

      <div>
        <div className='StatsTable'>
        <div className='StatsTableTitle'>Total Spending - ADD NUMBER HERE</div>
          <Table borderless>
            <tbody>
              { categories.map((category, index) => 
                
              <tr style={{ display:'flex', justifyContent:'space-between', margin:'0' }}>
                <td className='StatsCardName'>{<img src={category.image} alt='icon' />} {category.name}</td>
                <div className='StatsCardPercent'>
                  <td>50%</td>
                </div>
                <div>
                  <td className='StatsCardNums'>$400</td>
                </div>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
}