import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import { S3config } from '../../../config';

const StyledImageWrapper = styled.div`
  img {
    max-width: 400px;
    max-height: 100px;
  }
`;

const Logo = () => {
  return (
    <StyledImageWrapper>
      <img src={S3config.LOGO} alt="null" />
    </StyledImageWrapper>
  );
};

export default Logo;
