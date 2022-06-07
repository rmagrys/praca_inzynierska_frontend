import React from 'react';
import styled from 'styled-components';
import { WelcomeUser, TimeRegistered } from './components';

import { Divider } from 'antd';

const StyledDivider = styled(Divider)`
  height: 100px;
  margin: 12px 15px;
`;

const StyledUserDetailsHeader = styled.div`
  margin: 40px 20px;
  height: 130px;
  max-width: 800px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserDetailsHeader = () => {
  return (
    <StyledUserDetailsHeader>
      <WelcomeUser />
      <StyledDivider type="vertical" />
      <TimeRegistered />
    </StyledUserDetailsHeader>
  );
};

export default UserDetailsHeader;
