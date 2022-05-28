import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';

const StyledDivider = styled(Divider)`
  margin: 15px 0;
`;

const StyledHomePageSideBar = styled.div`
  margin: 40px 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 30%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  padding: 0 1rem;
  flex-basis: 100%;
  color: var(--greyLight);
  &:hover {
    cursor: pointer;
    color: var(--cerise);
  }
`;

const HomePageSidebar = () => {
  return (
    <StyledHomePageSideBar>
      <Typography.Title
        level={5}
        style={{
          padding: '15px',
          margin: 0,
        }}
      >
        Kategorie
        <StyledDivider />
      </Typography.Title>
      <StyledList>
        <StyledListItem>Elektronika</StyledListItem>
        <StyledListItem>Moda</StyledListItem>
        <StyledListItem>Dom i Ogród</StyledListItem>
        <StyledListItem>SuperMarket</StyledListItem>
        <StyledListItem>Dziecko</StyledListItem>
        <StyledListItem>Uroda</StyledListItem>
        <StyledListItem>Zdrowie</StyledListItem>
        <StyledListItem>Kultura i rozrywka</StyledListItem>
        <StyledListItem>Sport i turystyka</StyledListItem>
        <StyledListItem>Motoryzacja</StyledListItem>
        <StyledListItem>Nieruchomości</StyledListItem>
        <StyledListItem>Nagie fotki Kubicy</StyledListItem>
      </StyledList>
    </StyledHomePageSideBar>
  );
};

export default HomePageSidebar;
