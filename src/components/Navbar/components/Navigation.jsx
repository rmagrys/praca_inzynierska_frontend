import React from 'react';
import styled from 'styled-components';

import { AuctionTypeSelector } from '../components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
  max-width: 1200px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  padding: 0 1rem;
  &:first-child {
    flex-basis: auto;
    margin: 0 auto;
    order: 2;
  }
  &:hover {
    cursor: pointer;
    color: var(--cerise);
  }
`;

const Navigation = () => {
  return (
    <StyledWrapper>
      <AuctionTypeSelector />
      <StyledList>
        <StyledListItem onClick={() => (window.location.href = '/add-auction')}>
          Dodaj przedmiot
        </StyledListItem>
        <StyledListItem onClick={() => (window.location.href = '/home')}>
          Strona Główna
        </StyledListItem>
        <StyledListItem onClick={() => (window.location.href = '/my-bids')}>
          Moje Oferty
        </StyledListItem>
        <StyledListItem onClick={() => (window.location.href = '/my-auctions')}>
          Moje Przedmioty
        </StyledListItem>
        <StyledListItem onClick={() => (window.location.href = '/summary')}>
          Podsumowania
        </StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default Navigation;
