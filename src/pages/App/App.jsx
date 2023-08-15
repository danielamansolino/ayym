import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

// Page Imports
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

// Component Imports in test
import Account from '../../components/Account/Account';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Account user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
