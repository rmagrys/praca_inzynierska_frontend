import React from 'react';
import styled from 'styled-components';

import { Typography } from 'antd';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-left: 120px;
`;

const WelcomeUser = ({ name }) => {
  return (
    <StyledWrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Witaj {name}
      </Typography.Title>
    </StyledWrapper>
  );
};

export default WelcomeUser;
