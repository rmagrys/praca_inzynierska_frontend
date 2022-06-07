import React from 'react';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const StyledUserCircleWrapper = styled.span`
  margin-left: 20px;
  color: black;
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #eaeaea;
  border-radius: 50%;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledUserOutlined = styled(UserOutlined)`
  margin: 0 10px;
  font-size: 1.2rem;
`;

const UserIcon = () => {
  return (
    <StyledUserCircleWrapper onClick={() => (window.location.href = '/user')}>
      <StyledUserOutlined />
    </StyledUserCircleWrapper>
  );
};

export default UserIcon;
