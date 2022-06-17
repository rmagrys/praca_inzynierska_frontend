import React, { useState } from 'react';
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

function UserAuctions({ searchContext }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [sortType, setSortType] = useState(null);

  return (
    <StyledPageContainer>
      <UserAuctionsPageHeader setSortType={setSortType} />
      <StyledContentContainer>
        <UserAuctionsSidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <UserAuctionsListOfContent
          sortType={sortType}
          activeCategory={activeCategory}
          searchContext={searchContext}
        />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default UserAuctions;
