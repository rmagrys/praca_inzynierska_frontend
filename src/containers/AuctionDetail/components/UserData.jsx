import React from 'react';
import styled from 'styled-components';

import { Typography } from 'antd';

const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0 auto;
`;

const UserData = ({ userData }) => {
  return (
    <StyledWrapper>
      <Typography.Title level={5}>Dane kontaktowe kupującego</Typography.Title>
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
