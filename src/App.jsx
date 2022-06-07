import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  UserDetailsPage,
  HomePage,
  LoginPage,
  RegisterPage,
  AddAuction,
  AuctionDetail,
  UserAuctions,
  UserBids,
  Summary,
} from './containers';
import { Navbar, GlobalStyle } from './components';
import 'antd/dist/antd.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const routeSelector = (path) => {
    if (!localStorage.getItem('token')) {
      console.log('redirect');
      return <LoginPage loginHandler={() => setIsAuthenticated(true)} />;
    }

    switch (path) {
      case 'home':
        return <HomePage />;
      case 'user':
        return <UserDetailsPage />;
      case 'add-auction':
        return <AddAuction />;
      case 'details':
        return <AuctionDetail />;
      case 'my-auctions':
        return <UserAuctions />;
      case 'my-bids':
        return <UserBids />;
      case 'summary':
        return <Summary />;
      default:
        return <LoginPage loginHandler={() => setIsAuthenticated(true)} />;
    }
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={routeSelector('home')}>
          >
        </Route>
        <Route path="/login" element={routeSelector('home')} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={routeSelector('home')} />
        <Route path="/user" element={routeSelector('user')} />
        <Route path="/add-auction" element={routeSelector('add-auction')} />
        <Route path="/details" element={routeSelector('details')} />
        <Route path="/my-auctions" element={routeSelector('my-auctions')} />
        <Route path="/my-bids" element={routeSelector('my-bids')} />
        <Route path="/summary" element={routeSelector('summary')} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
