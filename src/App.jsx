import React from 'react';
import { UserDetails, HomePage, LoginPage } from './containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route path="user_details" element={<UserDetails />} />
          <Route path="home_page" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
