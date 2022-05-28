import React from 'react';
import styled from 'styled-components';
import { SearchDetails, SortSelect } from './components';

const StyledHomePageHeader = styled.div`
  margin: 40px 20px;
  height: 80px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomePageHeader = () => {
  return (
    <StyledHomePageHeader>
      <SearchDetails />
      <SortSelect />
    </StyledHomePageHeader>
  );
};

export default HomePageHeader;
