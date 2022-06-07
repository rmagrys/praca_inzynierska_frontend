import React, { useState } from 'react';
import styled from 'styled-components';
import { Radio, Typography, Button, Form, Divider, Input } from 'antd';

import { Countdown } from '../components';
const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  margin: 40px 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 30%;
`;

const StyledContentWrapper = styled.div`
  margin: 15px;
`;

const StyledButton = styled(Button)`
  margin: 5px 0px;
  width: 100%;
  height: 60px;
`;

const StyledDivider = styled(Divider)`
  width: 80%;
  padding: 15px;
  margin-right: 30px;
  margin-bottom: 0;
`;

const StyledInput = styled(Input)`
  width: 50px;
`;

const StyledButtonsWrapper = styled.div`
  margin: 10px 0;
`;

const StyledMaxItemCount = styled.span`
  margin-left: 10px;
`;

const StyledDesription = styled.span`
  word-wrap: break-word;
`;

const auction = {
  author: 'Robert Kubica',
  price: 86.22,
  count: 123,
  completionDate: new Date('12/31/2022 23:59:59'),
  createdAt: new Date('1/1/2022 23:59:59'),
  intervalTime: 31230000,
  priceDrop: 8,
  auctionType: 'descending-auction',
  minimumPrice: 10,
};

const product = {
  name: 'Hotdog z orlenu',
  description: 'Hotdog z możliwością wyboru wielu rodzajów sosów',
};

const bid = {
  bidderId: 123,
  bidValue: 3123,
};

const bidder = {
  name: 'Valteri Bottas',
};

const RightMenuSection = () => {
  const [counter, setCounter] = useState(auction.price);
  const [price, setPrice] = useState(null);
  const isAuctionType = (type) => auction.auctionType === type;

  const calculateDescDateAndPrice = () => {
    const now = new Date();
    const createdAt = auction.createdAt.getTime();

    const diff = now.getTime() - createdAt;
    const timesPriceChanged = diff / auction.intervalTime;
    const timeToChangePrice = timesPriceChanged - Math.floor(timesPriceChanged);

    console.log(timesPriceChanged);

    const calculatedPriceDrop =
      auction.price - Math.floor(timesPriceChanged) * auction.priceDrop;

    const finalPrice =
      auction.minimumPrice > calculatedPriceDrop
        ? auction.minimumPrice
        : calculatedPriceDrop;

    if (price !== finalPrice) {
      setPrice(finalPrice);
    }

    return new Date(now.getTime() + auction.intervalTime * timeToChangePrice);
  };

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Typography.Title level={4}>{auction.author}</Typography.Title>
        <StyledDivider />
        <Typography.Title level={4}>{product.name}</Typography.Title>

        {isAuctionType('default') && (
          <>
            <Typography.Title level={1}>{price}</Typography.Title>
            <Paragraph style={{ marginBottom: 0 }}>Liczba sztuk</Paragraph>
            <Button
              disabled={counter < 2}
              onClick={() => setCounter((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </Button>
            <StyledInput
              value={counter}
              onChange={({ target }) =>
                setCounter(
                  target.value > auction.count ? auction.count : target.value
                )
              }
            />

            <Button
              disabled={counter >= auction.count}
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </Button>
            <StyledMaxItemCount>Z sztuk : {auction.count}</StyledMaxItemCount>
            <StyledButtonsWrapper>
              <StyledButton type="primary">DODAJ DO KOSZYKA</StyledButton>
            </StyledButtonsWrapper>
            <StyledDivider />
          </>
        )}

        {isAuctionType('default-auction') && (
          <>
            <Typography.Title level={5}>Najwyższa oferta</Typography.Title>
            <Paragraph style={{ marginBottom: 0 }}>Od: {bidder.name}</Paragraph>
            <Typography.Title style={{ marginTop: '19px' }} level={1}>
              {bid.bidValue} PLN
            </Typography.Title>
            <Typography.Title level={5}>
              Do zakończenia aukcji zostało
            </Typography.Title>
            <Countdown finishDate={auction.completionDate} />
            <Paragraph style={{ marginBottom: 0 }}>Twoja oferta</Paragraph>
            <Input addonAfter="PLN" value={bid.bidValue + 1} />
            <StyledButtonsWrapper>
              <StyledButton type="primary">DODAJ SWOJĄ OFERTĘ</StyledButton>
            </StyledButtonsWrapper>
          </>
        )}

        {isAuctionType('blind-auction') && (
          <>
            <Typography.Title level={5}>Najwyższa oferta</Typography.Title>
            <Paragraph style={{ marginBottom: 0 }}>Od: {bidder.name}</Paragraph>
            <Typography.Title level={5}>
              Do zakończenia aukcji zostało
            </Typography.Title>
            <Countdown finishDate={auction.completionDate} />
            <Paragraph style={{ marginBottom: 0 }}>Twoja oferta</Paragraph>
            <Input addonAfter="PLN" value={0} />
            <StyledButtonsWrapper>
              <StyledButton type="primary">DODAJ SWOJĄ OFERTĘ</StyledButton>
            </StyledButtonsWrapper>
          </>
        )}

        {isAuctionType('descending-auction') && (
          <>
            <Typography.Title level={5}>Aktualna Cena</Typography.Title>

            <Typography.Title style={{ marginTop: '19px' }} level={1}>
              {price} PLN
            </Typography.Title>
            <Typography.Title level={5}>
              Do zakończenia aukcji zostało
            </Typography.Title>
            <Countdown finishDate={auction.completionDate} />
            {auction.minimumPrice < price && (
              <>
                <Typography.Title level={5} style={{ marginTop: '10px' }}>
                  {`Do obniżenia ceny o ${auction.priceDrop} PLN zostało`}
                </Typography.Title>
                <Countdown finishDate={calculateDescDateAndPrice()} />
              </>
            )}
            <StyledButtonsWrapper>
              <StyledButton type="primary">KUP TERAZ</StyledButton>
            </StyledButtonsWrapper>
          </>
        )}
        <Typography.Title level={5}>Opis</Typography.Title>
        <StyledDesription>{product.description}</StyledDesription>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default RightMenuSection;
