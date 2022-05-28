import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-between;
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
    <StyledList>
      <StyledListItem>Zakupy</StyledListItem>
      <StyledListItem>Strona Główna</StyledListItem>
      <StyledListItem>Polubione</StyledListItem>
      <StyledListItem>Moje Towary</StyledListItem>
      <StyledListItem>Podsumowania</StyledListItem>
    </StyledList>
  );
};

export default Navigation;
