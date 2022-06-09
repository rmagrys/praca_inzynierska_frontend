import React from 'react';
import styled from 'styled-components';

import { Input, Form } from 'antd';

const StyledInput = styled(Input.Search)`
  max-width: 40rem;
  .ant-input {
    padding-left: 1rem;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }
  .ant-input-group-addon {
    background-color: var(--ghostWhite);
  }
  .ant-btn-icon-only.ant-btn-lg {
    width: 5rem;
    border-bottom-right-radius: 2rem !important;
    border-top-right-radius: 2rem !important;
  }
`;

const SearchBar = ({ handleSearch }) => {
  return (
    <Form.Item noStyle name="search">
      <StyledInput
        size="large"
        placeholder="Szukaj..."
        onPressEnter={() => handleSearch()}
        onSearch={() => handleSearch()}
      />
    </Form.Item>
  );
};

export default SearchBar;
