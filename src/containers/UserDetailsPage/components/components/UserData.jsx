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

const UserData = () => {
  return (
    <StyledWrapper>
      <Typography.Title level={5}>Twoje Dane</Typography.Title>
      <Paragraph>
        <strong>Nazwa użytkownika:</strong> user
      </Paragraph>
      <Paragraph>
        <strong>Imię:</strong> Rafał
      </Paragraph>
      <Paragraph>
        <strong>Nazwisko:</strong> Magryś
      </Paragraph>
      <Paragraph>
        <strong>Telefon:</strong> 666 666 666
      </Paragraph>
      <Paragraph>
        <strong>e-mail:</strong> example@example.com
      </Paragraph>
      <Button type="primary">Edytuj</Button>
    </StyledWrapper>
  );
};

export default UserData;
