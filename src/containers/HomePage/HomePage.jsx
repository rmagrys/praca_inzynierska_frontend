import React from 'react';
import styled from 'styled-components';
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

function HomePage({ isAuthenticated }) {
  return (
    <StyledPageContainer>
      <HomePageHeader />
      <StyledContentContainer>
        <HomePageSidebar />
        <HomePageListOfContent />
      </StyledContentContainer>
    </StyledPageContainer>
  );
}

export default HomePage;
