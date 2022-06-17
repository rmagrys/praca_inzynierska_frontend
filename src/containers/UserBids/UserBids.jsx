import React, { useState } from 'react';
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

function UserBids({ searchContext }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [sortType, setSortType] = useState(null);

  return (
    <StyledPageContainer>
      <UserBidsHeader setSortType={setSortType} />
      <StyledContentContainer>
        <UserBidsSidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <UserBidsListOfContent
          sortType={sortType}
          activeCategory={activeCategory}
          searchContext={searchContext}
        />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default UserBids;
