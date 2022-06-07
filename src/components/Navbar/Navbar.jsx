import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  Mail,
  Phone,
  UserIcon,
  ShoppingCartIcon,
  SearchBar,
  Logo,
  Navigation,
  Logout,
} from './components';

const NavBarTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--royalBlueDark);
  height: 40px;
`;

const NavBarMiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--ghostWhite);
  height: 80px;
  position: sticky;
`;

const NavBarBottomSection = styled.div`
  height: 60px;
  background-color: var(--ghostWhite);
  display: flex;
  align-items: center;
  flex-basis: 100%;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.span`
  color: var(--ghostWhite);
  margin-left: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <>
      <NavBarTopSection>
        <ContentWrapper>
          <LeftSide>
            <Mail mail="example@example.com" />
            <Phone phone="+48 932 231 321" />
          </LeftSide>
          <RightSide>
            <StyledText>PL</StyledText>
            <StyledText>PLN</StyledText>
            {isAuthenticated && <Logout />}
          </RightSide>
        </ContentWrapper>
      </NavBarTopSection>
      {isAuthenticated && (
        <>
          <NavBarMiddleSection>
            <ContentWrapper>
              <Logo />
              <SearchBar />
              <RightSide>
                <UserIcon />
                <ShoppingCartIcon />
              </RightSide>
            </ContentWrapper>
          </NavBarMiddleSection>
          <NavBarBottomSection>
            <ContentWrapper>
              <Navigation />
            </ContentWrapper>
          </NavBarBottomSection>
        </>
      )}
    </>
  );
};

export default Navbar;
