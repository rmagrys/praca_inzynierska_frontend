import React from 'react';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';

const StyledShoppingCartCircleWrapper = styled.span`
  margin-left: 20px;
  color: black;
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #eaeaea;
  border-radius: 50%;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledShoppingCartOutlined = styled(ShoppingCartOutlined)`
  margin: 0 10px;
  font-size: 1.2rem;
`;

const ShoppingCartIcon = () => {
  return (
    <StyledShoppingCartCircleWrapper>
      <StyledShoppingCartOutlined />
    </StyledShoppingCartCircleWrapper>
  );
};

export default ShoppingCartIcon;
