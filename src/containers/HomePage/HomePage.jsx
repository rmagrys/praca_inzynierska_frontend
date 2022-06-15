import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import {
  HomePageHeader,
  HomePageSidebar,
  HomePageListOfContent,
} from './components';

const StyledPageContainer = styled.div`
  // min-height: 5000px;
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

function HomePage({ searchContext }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [itemCount, setItemCount] = useState(null);
  const [sortType, setSortType] = useState(null);

  return (
    <StyledPageContainer>
      <HomePageHeader
        searchContext={searchContext}
        itemCount={itemCount}
        setSortType={setSortType}
      />
      <StyledContentContainer>
        <HomePageSidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <HomePageListOfContent
          sortType={sortType}
          itemCount={itemCount}
          setItemCount={setItemCount}
          activeCategory={activeCategory}
          searchContext={searchContext}
        />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default HomePage;
