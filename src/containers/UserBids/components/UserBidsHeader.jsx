import React from 'react';
import styled from 'styled-components';
import { Typography, Form } from 'antd';

import { SortSelect } from './components';

const StyledPageHeader = styled.div`
  margin: 40px 20px;
  min-height: 80px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 100%;
  display: flex;
  align-items: center;

  justify-content: space-around;
  @media screen and (max-width: 600px) {
    flex-flow: column wrap;
    > .ant-typography {
      order: -1;
    }
    > * {
      margin: 10px;
    }
  }
`;

const HomePageHeader = ({ searchContext, setSortType }) => {
  const [form] = Form.useForm();

  return (
    <StyledPageHeader>
      <Typography.Title level={3} style={{ margin: 0 }}>
        Twoje oferty
      </Typography.Title>
      <Form form={form} onFieldsChange={(value) => setSortType(value[0].value)}>
        <SortSelect />
      </Form>
    </StyledPageHeader>
  );
};

export default HomePageHeader;
