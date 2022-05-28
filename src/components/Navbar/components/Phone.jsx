import React from 'react';
import styled from 'styled-components';
import { PhoneOutlined } from '@ant-design/icons';

const StyledPhoneWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const StyledPhoneOutlined = styled(PhoneOutlined)`
  margin: 0 10px;
  font-size: 1.2rem;
`;

const StyledText = styled.span`
  font-size: 0.8rem;
`;

const Phone = ({ phone }) => {
  return (
    <StyledPhoneWrapper>
      <StyledPhoneOutlined />
      <StyledText>{phone}</StyledText>
    </StyledPhoneWrapper>
  );
};

export default Phone;
