import React from 'react';
import { Form, Input, Button, PageHeader, Checkbox, notification } from 'antd';
import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { getAuthToken } from '../../../api/auth';

const StyledLoginWrapper = styled.div`
  margin: 40px 20px;
  height: 40vh;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;

const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      const body = { email: values.username, password: values.password };
      const response = await getAuthToken(body);
      if (response.data.httpCode >= 400) {
        notification.error({
          message: 'Nie można zalogować',
          description: ` ${response.data.message}`,
        });
      } else {
        localStorage.setItem('token', response.data);
        notification.success({
          message: 'Pomyślnie zalogowano',
        });
        setTimeout(() => {
          window.location.href = '/home';
        }, 500);
      }
    } catch (error) {
      console.log('something went wrong');
    }
  };

  return (
    <StyledLoginWrapper>
      <PageHeader title="Zaloguj się" />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Proszę wprowadź swoją nazwę użytkownika!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Prosze wprowadź swoje hasło!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Hasło"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Zaloguj
          </Button>
          <span className="sub-text">
            Lub <Link to="/register">Zarejestruj się teraz!</Link>
          </span>
        </Form.Item>
      </Form>
    </StyledLoginWrapper>
  );
};

export default LoginForm;
