import React from 'react';
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../../utilities/DataContext';
import './Settings.css';
import {
  Container,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

export default function Settings() {
  const { profile, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData(); // Fetch user and profile data when the component mounts
  }, []);

  return (
    <div className="SettingsContainer">
      <h4>Settings</h4>
      <div className="SettingsHeader">
        <div className="SettingsImage">
          <img src='/icons/profileIcon.jpeg' alt='profileIcon' id='profileIcon' />
        </div>
        <div className="SettingsInfo">
          <div>
            {profile ? `${profile.firstName} ${profile.lastName}` : "Loading..."}
          </div>
        </div>
      </div>

      <div className="SettingsBody">

        <ListGroup>
          <ListGroupItem
            href="/settings"
            tag="a"
            className="SettingsItem"
          >
            <div className="SettingsOption"><img src='/icons/school.png' alt='schoolIcon' /><p>Personal Finance Learning</p><p><img src='/icons/chevron_big_right.png' alt='arrowIcon' /></p></div>
          </ListGroupItem>

          <ListGroupItem
            href="/settings"
            tag="a"
            className="SettingsItem"
          >
            <div className="SettingsOption"><img src='/icons/id-card.png' alt='accountIcon' /><p> Accounts</p><p><img src='/icons/chevron_big_right.png' alt='arrowIcon' /></p></div>
          </ListGroupItem>

          <ListGroupItem
            href="/settings"
            tag="a"
            className="SettingsItem"
          >
            <div className="SettingsOption"><img src='/icons/lock-closed.png' alt='lockIcon' /><p> Privacy & Security</p><p><img src='/icons/chevron_big_right.png' alt='arrowIcon' /></p></div>
          </ListGroupItem>

          <ListGroupItem
            href="/settings"
            tag="a"
            className="SettingsItem"
          >
            <div className="SettingsOption"><img src='/icons/help-circle.png' alt='helpIcon' /><p> Help & Legal</p><p><img src='/icons/chevron_big_right.png' alt='arrowIcon' /></p></div>
          </ListGroupItem>
          
          <ListGroupItem
            href="/settings"
            tag="a"
            className="SettingsItem"
          >
            <div className="SettingsOption"><img src='/icons/notifications.png' alt='notificationsIcon' /><p> Notifications</p><p><img src='/icons/chevron_big_right.png' alt='arrowIcon' /></p></div>
          </ListGroupItem>
          
        </ListGroup>
      </div>

    </div>
  );
}