import React from 'react';
import styled from 'styled-components';
import { Select, Form } from 'antd';
const { Option } = Select;

const StyledSortSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
`;

const StyledSpan = styled.div`
  margin-right: 15px;
`;

const SortSelect = () => {
  return (
    <StyledSortSelectWrapper>
      <StyledSpan>Sortuj Po</StyledSpan>
      <Form.Item name="sort" noStyle>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Wybierz"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="price_asc">Cenie rosnąco</Option>
          <Option value="price_desc">Cenie malejąco</Option>
          <Option value="date">Dacie</Option>
        </Select>
      </Form.Item>
    </StyledSortSelectWrapper>
  );
};

export default SortSelect;
