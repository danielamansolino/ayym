import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

// Page Imports
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import About from '../About/About';
import GettingStarted from '../GettingStarted/GettingStarted';
import ExpensePage from '../ExpensePage/ExpensePage';


// Component Imports in test
import Account from '../../components/Account/Account';
import Budget from '../../components/Budget/Budget';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Account user={user} />} />
              <Route path="/start" element={<GettingStarted user={user} />} />
              <Route path="/about" element={<About />} />
              <Route path="/budget" element={<Budget user={user} />} />
              <Route path="/expense" element={<ExpensePage user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
