import React from 'react';
import styled from 'styled-components';
import {
  UserAuctionsPageHeader,
  UserAuctionsListOfContent,
  UserAuctionsSidebar,
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

function UserAuctions() {
  return (
    <StyledPageContainer>
      <UserAuctionsPageHeader />
      <StyledContentContainer>
        <UserAuctionsSidebar />
        <UserAuctionsListOfContent />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default UserAuctions;
