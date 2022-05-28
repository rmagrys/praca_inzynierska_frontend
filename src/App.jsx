import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import { UserDetails, HomePage, LoginPage, RegisterPage } from './containers';
import { Navbar, GlobalStyle } from './components';
import 'antd/dist/antd.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar
        isAuthenticated={isAuthenticated}
        logouthandler={() => setIsAuthenticated(false)}
      />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage loginHandler={() => setIsAuthenticated(true)} />}
        />
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
