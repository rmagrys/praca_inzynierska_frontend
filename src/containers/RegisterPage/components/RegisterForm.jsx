import React from 'react';
import styled from 'styled-components';

import { Button, Form, Input, Select, PageHeader } from 'antd';

const StyledRegisterWrapper = styled.div`
  margin: 40px 20px;
  height: 60vh;
  min-width: 600px;
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

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </StyledRegisterWrapper>
  );
};

export default RegisterForm;
