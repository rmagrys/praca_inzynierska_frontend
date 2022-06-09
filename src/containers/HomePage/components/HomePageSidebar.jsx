import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Typography, Divider } from 'antd';

import { getAllCategories } from '../../../api/categories';

const StyledDivider = styled(Divider)`
  margin: 15px 0;
`;

const StyledHomePageSideBar = styled.div`
  margin: 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 30%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  &:last-child {
    margin-bottom: 20px;
  }
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  padding: 0 1rem;
  flex-basis: 100%;
  color: var(--greyLight);
  &:hover {
    cursor: pointer;
    color: var(--cerise);
  }
  ${(props) =>
    props.active &&
    css`
      color: var(--cerise);
    `}
`;

const HomePageSidebar = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => setCategories(res.data));
  }, []);

  return (
    <StyledHomePageSideBar>
      <Typography.Title
        level={5}
        style={{
          padding: '15px',
          margin: 0,
        }}
      >
        Kategorie
        <StyledDivider />
      </Typography.Title>
      <StyledList>
        {categories.map((category) => (
          <StyledListItem
            onClick={() => setActiveCategory(category.id)}
            active={category.id === activeCategory}
            key={category.id}
          >
            {category.name}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledHomePageSideBar>
  );
};

export default HomePageSidebar;
