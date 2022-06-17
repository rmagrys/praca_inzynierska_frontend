import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from 'antd';

const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-left: 120px;
`;

const UserData = ({ userData }) => {
  return (
    <StyledWrapper>
      <Typography.Title level={5}>Twoje Dane</Typography.Title>
      <Paragraph>
        <strong>Nazwa użytkownika:</strong> {userData && userData.nickname}
      </Paragraph>
      <Paragraph>
        <strong>Imię:</strong> {userData && userData.firstName}
      </Paragraph>
      <Paragraph>
        <strong>Nazwisko:</strong> {userData && userData.lastName}
      </Paragraph>
      <Paragraph>
        <strong>Telefon:</strong> {userData && userData.phone}
      </Paragraph>
      <Paragraph>
        <strong>e-mail:</strong> {userData && userData.email}
      </Paragraph>
    </StyledWrapper>
  );
};

export default UserData;
