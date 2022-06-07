import React from 'react';
import styled from 'styled-components';
import { SummaryContent, SummaryHeader } from './components';

const StyledPageContainer = styled.div`
  // min-height: 5000px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

function Summary({ isAuthenticated }) {
  return (
    <StyledPageContainer>
      <SummaryHeader />

      <SummaryContent />
    </StyledPageContainer>
  );
}

export default Summary;
