import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/Layout/layout';
import Login from './Components/LoginSignup/login';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Signup from './Components/LoginSignup/signup';

export interface User {
  username: string;
  password: string;
}

function App() {

  const [user, setUser] = useState(); 
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true' ||
  localStorage.getItem('isLoggedIn') === 'true');
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token: string) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('authToken', token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
  };
  
  return (
    <div>
      <Router>
            <Routes>
              <Route path="/createaccount" element={<Signup />} />
            </Routes>
      </Router>
      {!isLoggedIn && <Login onLogIn={handleLogin}/>}
      {isLoggedIn && <Layout onLogout={handleLogout}/>
      }
    </div>
  );
}
export default App;
