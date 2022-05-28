import React from 'react';
import styled from 'styled-components';
import { RegisterForm } from './components';

const StyledPageContainer = styled.div`
  max-width: 80%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RegisterPage() {
  return (
    <StyledPageContainer>
      <RegisterForm />
    </StyledPageContainer>
  );
}

export default RegisterPage;
