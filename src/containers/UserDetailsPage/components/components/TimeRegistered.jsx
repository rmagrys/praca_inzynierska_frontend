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

const TimeRegistered = () => {
  return (
    <StyledWrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Jesteś z nami
      </Typography.Title>
      <Paragraph
        style={{
          margin: 0,
        }}
      >
        6 lat 6 miesięcy 6 dni
      </Paragraph>
    </StyledWrapper>
  );
};

export default TimeRegistered;
