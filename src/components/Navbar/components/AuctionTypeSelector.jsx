import React from 'react';
import styled from 'styled-components';
import { Select, Form } from 'antd';

const { Option } = Select;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AuctionTypeSelector = () => {
  return (
    <StyledWrapper>
      <Form.Item noStyle name="auctionType" initialValue="default">
        <Select style={{ width: '200px' }}>
          <Option value="default">Normalna aukcja</Option>
          <Option value="default-auction">Normalna licytacja</Option>
          <Option value="blind-auction">Licytacja w ciemno</Option>
          <Option value="descending-auction">Malejąca licytacja</Option>
        </Select>
      </Form.Item>
    </StyledWrapper>
  );
};

export default AuctionTypeSelector;
