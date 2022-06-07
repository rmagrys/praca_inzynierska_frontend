import React from 'react';
import styled from 'styled-components';
import { Typography, Image } from 'antd';

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

const StyledImage = styled(Image)`
  margin: 10px;
`;

const ImagesPart = () => {
  return (
    <StyledWrapper>
      <Typography.Title level={3} style={{ margin: '20px' }}>
        Hotdog z Orlenu
      </Typography.Title>
      <ContentWrapper>
        <StyledImageWrapper>
          <MainImageWrapper>
            <Image
              width={500}
              src="https://wspieramypolske.orlen.pl/img/layer/kubica.png"
            />
          </MainImageWrapper>
          <RestImagesWrapper>
            <Image.PreviewGroup>
              <Image
                width={100}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={100}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={100}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={100}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={100}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </Image.PreviewGroup>
          </RestImagesWrapper>
        </StyledImageWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default ImagesPart;
