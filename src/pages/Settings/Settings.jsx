import React from 'react';


import './Settings.css';
import {
  Container,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

export default function Settings() {
  return (
    <div className="SettingsContainer">
      <h4>Settings</h4>
      <div className="SettingsHeader">
        <div className="SettingsImage">
          image
        </div>
        <div className="SettingsInfo">
          <div>
            Jocelyn M.
            <br />
            Jocelyn.mendez@gmail.com
          </div>
        </div>
      </div>

      <div className="SettingsBody">
        <ListGroup>
          <ListGroupItem
            href="/settings"
            tag="a"
          >
            Personal Finance Learning
          </ListGroupItem>
        </ListGroup>
      </div>

    </div>
  );
}