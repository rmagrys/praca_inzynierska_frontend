import React from 'react';
import styled from 'styled-components';

import { Typography } from 'antd';

const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-right: 120px;
`;

const TimeRegistered = ({ createdAt }) => {
  return (
    <StyledWrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Jesteś z nami od
      </Typography.Title>
      <Paragraph
        style={{
          margin: 0,
        }}
      >
        {createdAt.substring(0, 10)}
      </Paragraph>
    </StyledWrapper>
  );
};

export default TimeRegistered;
