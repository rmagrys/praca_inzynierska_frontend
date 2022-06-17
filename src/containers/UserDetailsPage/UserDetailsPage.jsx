import React, { useState, useEffect } from 'react';
import { UserDetailsHeader, UserDetailsContent } from './components';
import styled from 'styled-components';
import { Spin } from 'antd';
import { getUserById } from '../../api/user';
import { parseJwt } from '../../api/jwt';

const StyledPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const UserDetailsPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { user } = parseJwt(localStorage.getItem('token'));
    getUserById(user).then((res) => setUserData(res.data));
  }, []);

  return (
    <StyledPageContainer>
      {userData ? (
        <>
          <UserDetailsHeader userData={userData} />
          <UserDetailsContent userData={userData} />
        </>
      ) : (
        <Spin style={{ marginTop: '30%' }} spinning={!userData} />
      )}
    </StyledPageContainer>
  );
};

export default UserDetailsPage;
