import React from 'react';
import styled from 'styled-components';
import {
  UserBidsHeader,
  UserBidsListOfContent,
  UserBidsSidebar,
} from './components';

const StyledPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function UserBids() {
  return (
    <StyledPageContainer>
      <UserBidsHeader />
      <StyledContentContainer>
        <UserBidsSidebar />
        <UserBidsListOfContent />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default UserBids;
