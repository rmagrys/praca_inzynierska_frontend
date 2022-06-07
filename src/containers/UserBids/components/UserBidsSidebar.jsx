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

const categories = [
  { id: 1, name: 'Elektronika' },
  { id: 2, name: 'Moda' },
  { id: 3, name: 'Dom i Ogród' },
  { id: 4, name: 'SuperMarket' },
  { id: 5, name: 'Dziecko' },
  { id: 6, name: 'Uroda' },
  { id: 7, name: 'Zdrowie' },
  { id: 8, name: 'Kultura i rozrywka' },
  { id: 9, name: 'Motoryzacja' },
  { id: 10, name: 'Nieruchomości' },
  { id: 11, name: 'Nagie fotki Kubicy' },
];

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
        {categories.map((category) => (
          <StyledListItem key={category.id}>{category.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledHomePageSideBar>
  );
};

export default HomePageSidebar;
