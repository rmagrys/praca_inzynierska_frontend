import React, { useState, useEffect } from 'react';
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
import { S3config } from '../../../config';
import { getAllCategories } from '../../../api/categories';

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

const AuctionItemForm = ({ auctionType, setImagesUrls }) => {
  const [categories, setCategories] = useState([]);
  const isAuctionType = (type) => auctionType === type;

  useEffect(() => {
    getAllCategories().then((res) => setCategories(res.data));
  }, []);

  return (
    <StyledWrapper>
      <Typography.Title level={3}>Dodaj zdjęcia:</Typography.Title>
      <div>
        <Uploader setImagesUrls={setImagesUrls} />
      </div>

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
            name="priceDrop"
            label="Wartość o jaką cena będzie maleć"
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

      {(isAuctionType('blind-auction') || isAuctionType('default-auction')) && (
        <Form.Item
          style={{ display: 'block' }}
          name="jumpToTheNextRaise"
          label="Skok ceny do kolejnego przebicia"
        >
          <StyledInputNumber addonAfter="PLN" />
        </Form.Item>
      )}
      <Form.Item
        style={{ display: 'block' }}
        name="completionDate"
        label="Data zakończenia"
      >
        <StyledDatePicker format="YYYY-MM-D HH:m:s" />
      </Form.Item>
    </StyledWrapper>
  );
};

export default AuctionItemForm;
