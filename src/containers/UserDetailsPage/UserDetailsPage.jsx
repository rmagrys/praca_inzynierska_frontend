import React from 'react';
import { UserDetailsHeader, UserDetailsContent } from './components';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  // min-height: 5000px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const UserDetailsPage = () => {
  return (
    <StyledPageContainer>
      <UserDetailsHeader />
      <UserDetailsContent />
    </StyledPageContainer>
  );
};

export default UserDetailsPage;
