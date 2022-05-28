import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';

const StyledImageWrapper = styled.div`
  img {
    max-width: 200px;
    max-height: 40px;
  }
`;

const Logo = () => {
  return (
    <StyledImageWrapper>
      <img
        src="https://www.wielkopolskiebazarek.pl/image/e-porady.png"
        alt="null"
      />
    </StyledImageWrapper>
  );
};

export default Logo;
