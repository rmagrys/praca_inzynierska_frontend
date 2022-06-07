import React, { useState } from 'react';
import styled from 'styled-components';
import { ImagesPart, RightMenuSection } from './components';

const StyledPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AuctionDetail = () => {
  const [auctionType, setAuctionType] = useState('default');

  return (
    <StyledPageContainer>
      <StyledContentContainer>
        <ImagesPart />
        <RightMenuSection />
      </StyledContentContainer>
    </StyledPageContainer>
  );
};

export default AuctionDetail;
