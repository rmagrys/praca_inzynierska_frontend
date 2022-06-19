import React from 'react';
import styled from 'styled-components';
import { Typography, Image } from 'antd';

import { S3config } from '../../../config';

const StyledWrapper = styled.div`
  margin: 40px 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 70%;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 30px;
  align-items: center;
  justify-content: space-around;
`;

const MainImageWrapper = styled.div`
  flex-basis: 100%;
`;

const RestImagesWrapper = styled.div`
  margin-top: 30px;
  flex-basis: 25%;
`;

const ImagesPart = ({ pictures, name }) => {
  const [first, ...rest] = pictures;
  return (
    <StyledWrapper>
      <Typography.Title level={3} style={{ margin: '20px' }}>
        {name}
      </Typography.Title>
      <ContentWrapper>
        <StyledImageWrapper>
          <MainImageWrapper>
            <Image
              width={500}
              src={
                first
                  ? `${S3config.AWS_S3_PATH}${first.url}`
                  : S3config.DEFAULT_PICTURE
              }
            />
          </MainImageWrapper>
          <RestImagesWrapper>
            <Image.PreviewGroup>
              {rest.map((image) => (
                <Image
                  width={100}
                  src={`${S3config.AWS_S3_PATH}${image.url}`}
                />
              ))}
            </Image.PreviewGroup>
          </RestImagesWrapper>
        </StyledImageWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default ImagesPart;
