import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ImagesPart, RightMenuSection, InfoForSeller } from './components';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

import { getAuctionById } from '../../api/auction';
import { parseJwt } from '../../api/jwt';

const StyledPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSpinner = styled(Spin)`
  ${({ spinning }) => css`
    position: fixed;
    transform: translate(0, 50vh);
  `}
`;

const AuctionDetail = () => {
  const [auctionType, setAuctionType] = useState('default');
  const [auction, setAuction] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getAuctionById(id).then((auction) => {
      setAuctionType(auction.data.auctionType);
      setAuction(auction.data);
      setIsFetching(false);
    });
  }, [id]);

  const token = localStorage.getItem('token');
  const { user } = parseJwt(token);
  const isLoggedUserAuctionOwner =
    auction && auction.seller ? +user === +auction.seller.id : false;
  const isAuctionFinished =
    auction && new Date(auction.completionDate) < new Date();

  const isAuctionPaid = auction && auction.payment ? true : false;

  console.log('isLoggedUserAuctionOwner', isLoggedUserAuctionOwner);
  console.log('isAuctionFinished', isAuctionFinished);

  useEffect(() => {
    console.log(auction);
  }, [auction]);

  useEffect(() => {
    console.log(auctionType);
  }, [auctionType]);

  return (
    <StyledPageContainer>
      <StyledSpinner size="large" spinning={isFetching} tip="Ładowanie...">
        <StyledContentContainer>
          {auction && (
            <ImagesPart
              pictures={auction.pictures}
              name={auction.product.name}
            />
          )}
          {auction && (
            <RightMenuSection auction={auction} auctionType={auctionType} />
          )}
        </StyledContentContainer>
        {isLoggedUserAuctionOwner &&
          isAuctionFinished &&
          isAuctionPaid &&
          auction && <InfoForSeller userData={auction.payment.buyer} />}
      </StyledSpinner>
    </StyledPageContainer>
  );
};

export default AuctionDetail;
