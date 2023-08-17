import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

// Page Imports
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import About from '../About/About';
import GettingStarted from '../GettingStarted/GettingStarted';
import SpendingCategories from '../../components/SpendingCategories/SpendingCategories'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar'
import ExpensePage from '../ExpensePage/ExpensePage'
import ExpenseForm from '../../components/forms/ExpenseForm';


import BudgetPage from '../BudgetPage/BudgetPage';


import Settings from '../Settings/Settings';
import Statistics from '../Statistics/Statistics';

import {useLocation} from 'react-router-dom'



// Component Imports in test
import Account from '../../components/Account/Account';
import Budget from '../../components/Budget/Budget';


export default function App() {
  const location = useLocation(); // Get the current location
  const [user, setUser] = useState(getUser());
  const [hide, setHide] = useState(false);

  const isStartPage = location.pathname === '/start'; // Check if current location is '/start'


  return (
    <main className="App">
      { user ?
          <>
           {!isStartPage && <NavBar user={user} setUser={setUser} />} {/* Conditionally render NavBar */}
          <Routes>
              <Route path="/" element={<ExpensePage user={user} />} />
              <Route path="/start" element={<GettingStarted user={user} />} />
              <Route path="/about" element={<About />} />
              <Route path="/budget" element={<Budget user={user} />} />
              <Route path="/categories" element={<SpendingCategories user={user} />} />
              <Route path="/new" element={<ExpenseForm user={user} />} />
              <Route path="/settings" element={<Settings user={user} />} />
              <Route path="/budgetpage" element={<BudgetPage user={user}/>} />

              <Route path="/navbar" element={<MobileNavBar user={user} />} />

              <Route path="/statistics" element={<Statistics user={user} />} />
              {/* <Route path="/expenseForm" element={<ExpenseForm user={user} />} /> */}

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
