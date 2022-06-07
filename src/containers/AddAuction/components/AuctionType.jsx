import React from 'react';
import styled from 'styled-components';
import { Radio, Typography, Button, Form } from 'antd';

const { Paragraph } = Typography;

const StyledWrapper = styled.div`
  margin: 40px 20px;
  height: 85vh;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  border-radius: 10px;
  flex-basis: 40%;

  .ant-radio-button-wrapper {
    margin: 10px 15px;
    padding: 20px;
    min-height: 150px;
    border-radius: 10px;
    max-width: 500px;
  }

  .ant-radio-button-wrapper {
    border-radius: 10px;
  }
`;

const StyledButton = styled(Button)`
  margin: 30px;
  width: 100%;
  height: 60px;
`;

const RadioSelectWrapper = styled.div`
  flex-flow: row wrap;
`;

const auctionTypes = [
  {
    id: 1,
    name: 'Kup teraz',
    value: 'default',
    description:
      'Domyślna aukcja pozwalająca na dodawanie przedmiotu na zasadach kup teraz',
  },
  {
    id: 2,
    name: 'Licytacja standardowa',
    value: 'default-auction',
    description:
      'Zwykła licytacja, której każdy kupujący widzi najwyższą cenę zaoferowaną przez innych użytkowników',
  },
  {
    id: 3,
    name: 'Licytacja w ciemno',
    value: 'blind-auction',
    description:
      'Licytacja polegająca, że kupujący widzi tylko cenę wywoławczą, i w ciemno musi obstawiać',
  },
  {
    id: 4,
    name: 'Aukcja malejąca',
    value: 'descending-auction',
    description:
      'Aukcja polegająca na tym, że cena wywoławcza maleje z czasem, aż do minimalnego pułapu określonego przez sprzedawcę',
  },
];

const AuctionType = ({ setAuction, auctionType, addItem }) => {
  return (
    <StyledWrapper>
      <RadioSelectWrapper>
        <Form.Item name="auctionType" noStyle>
          <Radio.Group>
            {auctionTypes.map((auctionType) => (
              <Radio.Button
                key={auctionType.id}
                value={auctionType.value}
                autoFocus={'default' === auctionType.value}
                onClick={({ target }) => setAuction(target.value)}
              >
                <Typography.Title
                  key={auctionType.id}
                  level={5}
                  style={{ margin: 0 }}
                >
                  {auctionType.name}
                </Typography.Title>
                <Paragraph>{auctionType.description}</Paragraph>
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      </RadioSelectWrapper>
      <StyledButton type="primary" onClick={() => addItem()}>
        Zapisz przedmiot
      </StyledButton>
    </StyledWrapper>
  );
};

export default AuctionType;
