// App.js

import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Calendar from './Calendar';
import Story from './Story';
import Connections from './Connections';
import Games from './Games';

function App() {
  
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'calendar':
        return <Calendar setCurrentPage={setCurrentPage} />;
      case 'story':
        return <Story setCurrentPage={setCurrentPage} />;
      case 'connections':
        return <Connections setCurrentPage={setCurrentPage} />;
      case 'games':
        return <Games setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}


export default App;

