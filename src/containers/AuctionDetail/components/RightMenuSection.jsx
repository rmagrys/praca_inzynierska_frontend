import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Button,
  Form,
  Divider,
  Input,
  notification,
  Popconfirm,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { Countdown } from '../components';
import { parseJwt } from '../../../api/jwt';
import { addNewBidToAuction } from '../../../api/bid';
import { addPaymentToAuction } from '../../../api/payment';
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

const StyledButtonsWrapper = styled.div`
  margin: 10px 0;
`;

const StyledDesription = styled.span`
  word-wrap: break-word;
`;

const mapAuctionTypeToName = (auctionType) => {
  switch (auctionType) {
    case `default`:
      return 'Zwykła aukcja';

    case `default-auction`:
      return 'Zwykła licytacja';

    case `blind-auction`:
      return 'Licytacja w ciemno';

    case `descending-auction`:
      return 'Malejąca aukcja';

    default:
      return new Error('Unused value');
  }
};

const RightMenuSection = ({ auction, auctionType }) => {
  const [highestBid, setHighestBid] = useState(
    auction.bids.sort((a, b) => b.value - a.value)[0]
  );
  const [price, setPrice] = useState(null);
  const [descendingCountdownDate, setDescendingCountdownDate] = useState(
    new Date()
  );
  const [isAuctionFinished, setIsAuctionFinished] = useState(
    new Date(auction.completionDate) < new Date()
  );
  const [isAuctionPaid, setIsAuctionPaid] = useState(
    auction.payment ? true : false
  );

  const [form] = Form.useForm();
  const token = localStorage.getItem('token');
  const { user } = parseJwt(token);

  const isLoggedUserWithHighestBid = highestBid
    ? +user === +highestBid.buyer.id
    : false;

  const isLoggedUserAuctionOwner = auction.seller
    ? +user === +auction.seller.id
    : false;
  const isAuctionType = (type) => auctionType === type;

  const handleAddNewBid = async () => {
    try {
      const data = await form.validateFields();
      const body = {
        value: Number(data.bid),
        description: 'Bid',
      };
      const response = await addNewBidToAuction(user, auction.id, body);
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
      notification.success({
        message: 'Pomyślnie dodano ofertę',
      });
    } catch (error) {
      notification.error({
        message: 'Nie można dodać oferty',
        description: ` ${error.response.data.message}`,
      });
    }
  };

  const calculatePaymentValue = () => {
    if (isAuctionType('descending-auction')) {
      return price;
    }

    if (isAuctionType('default-auction') || isAuctionType('blind-auction')) {
      return highestBid.value;
    }

    if (isAuctionType('default')) {
      return auction.price;
    }
  };

  const handleConfirmPayment = async () => {
    try {
      const body = {
        value: calculatePaymentValue(),
        description: 'Informacje dla sprzedawcy',
      };
      const response = await addPaymentToAuction(auction.id, user, body);
      setIsAuctionPaid(true);
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
      notification.success({
        message: 'Pomyślnie potwierdzono płatność',
      });
    } catch (error) {
      notification.error({
        message: 'Wystąpił błąd',
      });
    }
  };

  const calculateDescDateAndPrice = () => {
    const now = new Date();
    const createdAt = new Date(auction.createdAt);
    const diffFromCreatedAt = now.getTime() - createdAt.getTime();
    const timesPriceChanged = diffFromCreatedAt / (auction.reducingTime * 1000);
    const timeToChangePrice = timesPriceChanged - Math.floor(timesPriceChanged);
    const calculatedPriceDrop =
      auction.price - Math.floor(timesPriceChanged) * auction.priceDrop;

    const finalPrice =
      auction.minimumPrice > calculatedPriceDrop
        ? auction.minimumPrice
        : calculatedPriceDrop;

    if (price !== finalPrice) {
      setPrice(finalPrice);
    }

    console.log('diff', diffFromCreatedAt / 1000);
    console.log('reducingTime', auction.reducingTime);
    console.log('timesPriceChanged', timesPriceChanged);
    console.log('timeToChangePrice', timeToChangePrice);
    console.log('timeToChangePrice', timeToChangePrice);
    console.log(
      'wynik w liczbie',
      now.getTime() + auction.reducingTime * (1 - timeToChangePrice) * 1000
    );

    console.log(
      'wynik',
      Date(
        now.getTime() + auction.reducingTime * (1 - timeToChangePrice) * 1000
      )
    );

    return new Date(
      now.getTime() + auction.reducingTime * (1 - timeToChangePrice) * 1000
    );
  };

  useEffect(() => {
    if (isAuctionType('descending-auction')) {
      setDescendingCountdownDate(calculateDescDateAndPrice());
    }
  }, [auctionType]);

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Typography.Title level={5} style={{ marginBottom: '5px' }}>
          {mapAuctionTypeToName(auctionType)} użytkownika:
        </Typography.Title>
        <Typography.Title level={4} style={{ marginTop: '5px' }}>
          {auction.seller.firstName} {auction.seller.lastName}
        </Typography.Title>
        <StyledDivider />
        <Typography.Title level={4}>{auction.product.name}</Typography.Title>
        <Form form={form}>
          {isAuctionType('default') && (
            <>
              <Typography.Title level={5}>Cena</Typography.Title>
              <Typography.Title level={1} style={{ marginTop: '19px' }}>
                {auction.price} PLN
              </Typography.Title>
              {isAuctionFinished ? (
                <Typography.Title level={5}>
                  Aukcja została ukończona
                </Typography.Title>
              ) : (
                <>
                  <Typography.Title level={5}>
                    Do zakończenia aukcji zostało
                  </Typography.Title>
                  <Countdown
                    onFinish={() => setIsAuctionFinished(true)}
                    finishDate={new Date(auction.completionDate)}
                  />
                </>
              )}
              {!isLoggedUserAuctionOwner && !isAuctionFinished && (
                <>
                  <Popconfirm
                    title="Jesteś pewien?"
                    icon={
                      <QuestionCircleOutlined
                        style={{
                          color: 'blue',
                        }}
                      />
                    }
                    cancelText="Anuluj"
                    okText="Potwierdź"
                    onConfirm={handleConfirmPayment}
                  >
                    <StyledButtonsWrapper>
                      <StyledButton type="primary">Kup teraz</StyledButton>
                    </StyledButtonsWrapper>
                  </Popconfirm>
                  <StyledDivider />
                </>
              )}
            </>
          )}

          {isAuctionType('default-auction') && (
            <>
              {auction.bids.length ? (
                <>
                  <Typography.Title level={5}>
                    Najwyższa oferta
                  </Typography.Title>
                  <Paragraph style={{ marginBottom: 0 }}>
                    {isLoggedUserWithHighestBid ? (
                      'Ty'
                    ) : (
                      <>
                        Od: {highestBid && highestBid.buyer.firstName}{' '}
                        {highestBid && highestBid.buyer.lastName}
                      </>
                    )}
                  </Paragraph>
                  <Typography.Title style={{ marginTop: '19px' }} level={1}>
                    {highestBid.value} PLN
                  </Typography.Title>
                </>
              ) : (
                'Brak ofert'
              )}

              <Typography.Title level={5}>Cena wywoławcza</Typography.Title>
              <Typography.Title style={{ marginTop: '19px' }} level={1}>
                {auction.price} PLN
              </Typography.Title>

              {isAuctionFinished ? (
                <Typography.Title level={5}>
                  Aukcja została ukończona
                </Typography.Title>
              ) : (
                <>
                  <Typography.Title level={5}>
                    Do zakończenia aukcji zostało
                  </Typography.Title>
                  <Countdown
                    onFinish={() => setIsAuctionFinished(true)}
                    finishDate={new Date(auction.completionDate)}
                  />
                </>
              )}
              {!isLoggedUserAuctionOwner && !isAuctionFinished && (
                <>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Twoja oferta
                  </Paragraph>
                  <Form.Item name="bid" noStyle>
                    <Input
                      disabled={isLoggedUserWithHighestBid}
                      addonAfter="PLN"
                      value={
                        highestBid
                          ? highestBid.value + auction.jumpToNextRise
                          : auction.price + auction.jumpToNextRise
                      }
                    />
                  </Form.Item>
                  <StyledButtonsWrapper>
                    <StyledButton
                      onClick={() => handleAddNewBid()}
                      type="primary"
                      disabled={isLoggedUserWithHighestBid}
                    >
                      DODAJ SWOJĄ OFERTĘ
                    </StyledButton>
                  </StyledButtonsWrapper>
                </>
              )}
            </>
          )}

          {isAuctionType('blind-auction') && (
            <>
              {auction.bids.length ? (
                <>
                  <Typography.Title level={5}>
                    Najwyższa oferta
                  </Typography.Title>
                  <Paragraph style={{ marginBottom: 0 }}>
                    {isLoggedUserWithHighestBid ? (
                      `Od: Ciebie w wartości ${highestBid.value} PLN`
                    ) : (
                      <>
                        Od: {highestBid.buyer.firstName}{' '}
                        {highestBid.buyer.lastName}
                      </>
                    )}
                  </Paragraph>
                </>
              ) : (
                'Brak ofert'
              )}
              <Typography.Title level={5}>Cena wywoławcza</Typography.Title>
              <Typography.Title style={{ marginTop: '19px' }} level={1}>
                {auction.price} PLN
              </Typography.Title>
              {isAuctionFinished ? (
                <Typography.Title level={5}>
                  Aukcja została ukończona
                </Typography.Title>
              ) : (
                <>
                  <Typography.Title level={5}>
                    Do zakończenia aukcji zostało
                  </Typography.Title>
                  <Countdown
                    onFinish={() => setIsAuctionFinished(true)}
                    finishDate={new Date(auction.completionDate)}
                  />
                </>
              )}
              {!isLoggedUserAuctionOwner && (
                <>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Twoja oferta
                  </Paragraph>
                  <Form.Item name="bid" noStyle>
                    <Input
                      disabled={isLoggedUserWithHighestBid}
                      addonAfter="PLN"
                      value={0}
                    />
                  </Form.Item>
                  <StyledButtonsWrapper>
                    <StyledButton
                      disabled={isLoggedUserWithHighestBid}
                      onClick={() => handleAddNewBid()}
                      type="primary"
                    >
                      DODAJ SWOJĄ OFERTĘ
                    </StyledButton>
                  </StyledButtonsWrapper>
                </>
              )}
            </>
          )}

          {isAuctionType('descending-auction') && (
            <>
              <Typography.Title level={5}>Aktualna Cena</Typography.Title>

              <Typography.Title style={{ marginTop: '19px' }} level={1}>
                {price} PLN
              </Typography.Title>
              {isAuctionFinished ? (
                <Typography.Title level={5}>
                  Aukcja została ukończona
                </Typography.Title>
              ) : (
                <>
                  <Typography.Title level={5}>
                    Do zakończenia aukcji zostało
                  </Typography.Title>
                  <Countdown
                    onFinish={() => setIsAuctionFinished(true)}
                    finishDate={new Date(auction.completionDate)}
                  />
                </>
              )}
              {auction.minimumPrice < price && !isAuctionFinished && (
                <>
                  <Typography.Title level={5} style={{ marginTop: '10px' }}>
                    {`Do obniżenia ceny o ${auction.priceDrop} PLN zostało`}
                  </Typography.Title>
                  <Countdown
                    onFinish={() =>
                      setDescendingCountdownDate(calculateDescDateAndPrice())
                    }
                    finishDate={descendingCountdownDate}
                  />
                </>
              )}
              {!isLoggedUserAuctionOwner &&
                !isAuctionFinished &&
                !isLoggedUserAuctionOwner && (
                  <>
                    <Popconfirm
                      title="Jesteś pewien?"
                      icon={
                        <QuestionCircleOutlined
                          style={{
                            color: 'blue',
                          }}
                        />
                      }
                      cancelText="Anuluj"
                      okText="Potwierdź"
                      onConfirm={handleConfirmPayment}
                    >
                      <StyledButtonsWrapper>
                        <StyledButton type="primary">KUP TERAZ</StyledButton>
                      </StyledButtonsWrapper>
                    </Popconfirm>
                  </>
                )}
            </>
          )}
        </Form>

        {(isAuctionType('blind-auction') || isAuctionType('default-auction')) &&
          isAuctionFinished &&
          isLoggedUserWithHighestBid &&
          !isAuctionPaid &&
          !isLoggedUserAuctionOwner && (
            <>
              <Popconfirm
                title="Jesteś pewien?"
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: 'blue',
                    }}
                  />
                }
                cancelText="Anuluj"
                okText="Potwierdź"
                onConfirm={handleConfirmPayment}
              >
                <StyledButtonsWrapper>
                  <StyledButton type="primary">Potwierdź zakup</StyledButton>
                </StyledButtonsWrapper>
              </Popconfirm>
            </>
          )}
        <Typography.Title level={5} style={{ marginTop: '10px' }}>
          Opis
        </Typography.Title>
        <StyledDesription>{auction.product.description}</StyledDesription>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default RightMenuSection;
