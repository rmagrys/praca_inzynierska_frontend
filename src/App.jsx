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
import { Navbar, GlobalStyle, PrivateRoute } from './components';
import { Form, Result, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchContext, setSearchContext] = useState({
    auctionType: 'default',
    searchValue: '',
  });
  const [form] = Form.useForm();

  const handleSearch = async () => {
    const fields = await form.validateFields();
    setSearchContext({ ...fields });
  };

  const searchInputsChangeHandler = (_, values) =>
    setSearchContext(
      values.reduce(
        (acc, val) => ({
          ...acc,
          [val.name[0]]: val.value ? val.value : '',
        }),
        {}
      )
    );

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Form form={form} onFieldsChange={searchInputsChangeHandler}>
        <Navbar handleSearch={handleSearch} />
      </Form>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute
              element={<HomePage searchContext={searchContext} />}
            />
          }
        />
        <Route
          path="/user"
          element={<PrivateRoute element={<UserDetailsPage />} />}
        />
        <Route
          path="/add-auction"
          element={<PrivateRoute element={<AddAuction />} />}
        />
        <Route
          path="/my-auctions"
          element={
            <PrivateRoute
              element={<UserAuctions searchContext={searchContext} />}
            />
          }
        />
        <Route
          path="/my-bids"
          element={
            <PrivateRoute
              element={<UserBids searchContext={searchContext} />}
            />
          }
        />
        <Route
          path="/summary"
          element={<PrivateRoute element={<Summary />} />}
        />
        <Route
          path="/details/:id"
          element={<PrivateRoute element={<AuctionDetail />} />}
        />

        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Przepraszamy, strona którą próbujesz odwiedzić nie istnieje."
              extra={
                <Button type="primary" hre>
                  Wróć na stronę główną
                </Button>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
