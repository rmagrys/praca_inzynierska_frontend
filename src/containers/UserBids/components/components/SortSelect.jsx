import React from 'react';
import styled from 'styled-components';
import { Select, Form, Typography } from 'antd';

const { Paragraph } = Typography;

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
          <Option value="1">Cenie</Option>
          <Option value="2">Dacie</Option>
        </Select>
      </Form.Item>
    </StyledSortSelectWrapper>
  );
};

export default SortSelect;
