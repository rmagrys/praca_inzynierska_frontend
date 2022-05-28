import React from 'react';
import styled from 'styled-components';

import { Typography, Divider } from 'antd';

const { Paragraph } = Typography;

const StyledDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-left: 20px;
`;

const StyledDivider = styled(Divider)`
  margin: 2px 0;
`;

const SearchDetails = () => {
  return (
    <StyledDetailsWrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Wyszukiwanie dla Licytacji
      </Typography.Title>
      <StyledDivider />
      <Paragraph
        style={{
          margin: 0,
        }}
      >
        Znaleziono wyników: 8
      </Paragraph>
    </StyledDetailsWrapper>
  );
};

export default SearchDetails;
