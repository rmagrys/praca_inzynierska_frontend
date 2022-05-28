import React from 'react';
import styled from 'styled-components';
import { LoginForm } from './components';

const StyledPageContainer = styled.div`
  max-width: 80%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoginPage({ loginHandler }) {
  return (
    <StyledPageContainer>
      <LoginForm login={loginHandler} />
    </StyledPageContainer>
  );
}

export default LoginPage;
