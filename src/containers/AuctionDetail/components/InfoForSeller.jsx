import React from 'react';
import styled from 'styled-components';

import { UserData } from './';

const StyledUserDetailsContent = styled.div`
  margin: 20px 20px;
  height: 300px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-flow: row wrap;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoForSeller = ({ userData }) => {
  return (
    <StyledUserDetailsContent>
      <UserData userData={userData} />
    </StyledUserDetailsContent>
  );
};

export default InfoForSeller;
