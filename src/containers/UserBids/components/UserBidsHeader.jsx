import React from 'react';
import styled from 'styled-components';
import { SearchDetails, SortSelect } from './components';
import { Typography } from 'antd';

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

const HomePageHeader = () => {
  return (
    <StyledPageHeader>
      <Typography.Title level={3} style={{ margin: 0 }}>
        {' '}
        Twoje oferty
      </Typography.Title>
      <SortSelect />
    </StyledPageHeader>
  );
};

export default HomePageHeader;
