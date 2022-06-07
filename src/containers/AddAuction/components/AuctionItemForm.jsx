import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  TimePicker,
  Button,
  Form,
  Input,
  Divider,
  InputNumber,
  DatePicker,
  Select,
} from 'antd';

import { Uploader } from '../components';

const { Option } = Select;

const StyledInput = styled(Input)`
  max-width: 350px;
  margin-top: 10px;
`;

const StyledTextArea = styled(Input.TextArea)`
  width: 350px;
  margin-top: 10px;
`;

const StyledDivider = styled(Divider)`
  width: 80%;
  padding: 15px;
  margin-right: 30px;
`;

const StyledInputNumber = styled(InputNumber)`
  width: 350px;
  > {
    margin-top: 10px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 350px;
  margin-top: 10px;
`;

const StyledTimePicker = styled(TimePicker)`
  width: 350px;
  margin-top: 10px;
`;

const StyledWrapper = styled.div`
  margin: 40px 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  /* display: flex;
  justify-content: flex-start;
  flex-flow: row wrap; */
  border-radius: 10px;
  flex-basis: 60%;

  > * {
    margin: 20px;
  }

  .ant-input-number-group-wrapper {
    margin-top: 15px;
  }

  .ant-form-item > div > label {
    font-size: 18px;
  }
`;

const categories = [
  { id: 1, name: 'Elektronika' },
  { id: 2, name: 'Moda' },
  { id: 3, name: 'Dom i Ogród' },
  { id: 4, name: 'SuperMarket' },
  { id: 5, name: 'Dziecko' },
  { id: 6, name: 'Uroda' },
  { id: 7, name: 'Zdrowie' },
  { id: 8, name: 'Kultura i rozrywka' },
  { id: 9, name: 'Motoryzacja' },
  { id: 10, name: 'Nieruchomości' },
  { id: 11, name: 'Nagie fotki Kubicy' },
];

const AuctionItemForm = ({ auctionType }) => {
  const isAuctionType = (type) => auctionType === type;

  return (
    <StyledWrapper>
      <Typography.Title level={3}>Dodaj zdjęcia:</Typography.Title>
      <Form.Item style={{ display: 'block' }} name="files">
        <Uploader />
      </Form.Item>

      <div>
        <StyledDivider />
      </div>

      <Form.Item
        style={{ display: 'block' }}
        name="name"
        label="Nazwa przedmiotu"
      >
        <StyledInput />
      </Form.Item>

      <Form.Item style={{ display: 'block' }} name="description" label="Opis">
        <StyledTextArea />
      </Form.Item>

      <div>
        <StyledDivider />
      </div>

      <Form.Item
        style={{ display: 'block' }}
        name="categoryId"
        label="Kategoria"
      >
        <Select style={{ width: '350px', marginTop: '10px' }}>
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <div>
        <StyledDivider />
      </div>

      <Form.Item
        style={{ display: 'block' }}
        name="startingPrice"
        label={isAuctionType('default') ? 'Cena Przedmiotu' : 'Cena wywoławcza'}
      >
        <StyledInputNumber addonAfter="PLN" />
      </Form.Item>
      {isAuctionType('descending-auction') && (
        <>
          <Form.Item
            style={{ display: 'block' }}
            name="minimumPrice"
            label="Cena minimalna"
          >
            <StyledInputNumber addonAfter="PLN" />
          </Form.Item>
          <Form.Item
            style={{ display: 'block' }}
            name="reducingTime"
            label="Czas do obniżenia ceny"
          >
            <StyledTimePicker />
          </Form.Item>
        </>
      )}

      {!isAuctionType('default') && (
        <Form.Item
          style={{ display: 'block' }}
          name="completionDate"
          label="Data zakończenia"
        >
          <StyledDatePicker format="YYYY-MM-D HH:m:s" />
        </Form.Item>
      )}
    </StyledWrapper>
  );
};

export default AuctionItemForm;
