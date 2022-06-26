import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button, Form, Input, Select, PageHeader, notification } from 'antd';

import { addNewUser } from '../../../api/user';
import { getAuthToken } from '../../../api/auth';

const StyledRegisterWrapper = styled.div`
  margin: 40px 20px;
  height: 70vh;
  flex-basis: 45%;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  button {
    width: 150px;
  }
`;

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { prefix, confirm, phone, ...rest } = values;
    const body = {
      password: confirm,
      phone: `${prefix}${phone}`,
      ...rest,
    };

    try {
      const response = await addNewUser(body);

      if (response.data.httpCode >= 400) {
        notification.error({
          message: 'Nie można zarejestrować',
          description: ` ${response.data.message}`,
        });
      } else {
        const loginBody = {
          email: rest.email,
          password: rest.password,
        };
        const token = await getAuthToken(loginBody);
        localStorage.setItem('token', token.body);
        window.location.href = '/home';
      }
    } catch (error) {
      console.log('something went wrong');
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="48">+48</Option>
        <Option value="0">0</Option>
        <Option value=""></Option>
      </Select>
    </Form.Item>
  );

  return (
    <StyledRegisterWrapper>
      <PageHeader title="Zarejestruj się" />
      <Form
        style={{ width: 450 }}
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '+48',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'To nie jest prawidłowy E-mail!',
            },
            {
              required: true,
              message: 'Proszę podaj swój E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Hasło"
          rules={[
            {
              required: true,
              message: 'Proszę podaj swoje hasło!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Potwierdź hasło"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Proszę potwierdź swoje hasło!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error('Podane hasła nie pasują do siebie!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nazwa"
          tooltip="Jak chcesz żeby inni Cię nazywali?"
          rules={[
            {
              required: true,
              message: 'Proszę wprowadź swoją nazwę użytkownika!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="Imię"
          rules={[
            {
              required: true,
              message: 'Proszę wprowadź swoje imię!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Nazwisko"
          rules={[
            {
              required: true,
              message: 'Proszę wprowadź swoje nazwisko!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefon"
          rules={[
            {
              required: true,
              message: 'Proszę podaj swój telefon!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Zarejestruj
          </Button>
        </Form.Item>
        <div className="ant-row ant-form-item" style={{ marginLeft: '30%' }}>
          <span>
            Lub <Link to="/login"> Zaloguj się teraz!</Link>
          </span>
        </div>
      </Form>
    </StyledRegisterWrapper>
  );
};

export default RegisterForm;
