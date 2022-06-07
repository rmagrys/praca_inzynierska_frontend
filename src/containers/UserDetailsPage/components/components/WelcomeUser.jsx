import React from 'react';
import styled from 'styled-components';

import { Typography, Divider } from 'antd';

const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-left: 120px;
`;

const StyledDivider = styled(Divider)`
  margin: 12px 0;
`;

const WelcomeUser = () => {
  return (
    <StyledWrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}
      >
        Witaj {`user.name`}
      </Typography.Title>
    </StyledWrapper>
  );
};

export default WelcomeUser;
