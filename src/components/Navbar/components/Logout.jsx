import React from 'react';
import styled from 'styled-components';
import { LogoutOutlined } from '@ant-design/icons';

const StyledLogoutWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
    color: var(--cerise);
  }
`;

const StyledLogoutOutlined = styled(LogoutOutlined)`
  margin-left: 5px;
  font-size: 1rem;
`;

const StyledText = styled.span`
  margin-left: 30px;
  font-size: 14px;
`;

const Logout = ({ logout }) => {
  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <StyledLogoutWrapper onClick={() => logoutHandler()}>
      <StyledText>Wyloguj</StyledText>
      <StyledLogoutOutlined />
    </StyledLogoutWrapper>
  );
};

export default Logout;
