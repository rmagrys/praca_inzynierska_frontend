import React from 'react';
import styled from 'styled-components';
import { MailOutlined } from '@ant-design/icons';

const StyledMailWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const StyledMailOutlined = styled(MailOutlined)`
  margin: 0 10px;
  font-size: 1.2rem;
`;

const StyledText = styled.span`
  font-size: 0.8rem;
`;

const Mail = ({ mail }) => {
  return (
    <StyledMailWrapper>
      <StyledMailOutlined />
      <StyledText>{mail}</StyledText>
    </StyledMailWrapper>
  );
};

export default Mail;
