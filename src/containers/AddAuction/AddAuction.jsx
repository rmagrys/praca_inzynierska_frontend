import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import { addNewAuction } from '../../api/auction';

import { AuctionType, AuctionItemForm } from './components';
import { parseJwt } from '../../api/jwt';

const StyledPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddAuction = () => {
  const [auctionType, setAuctionType] = useState('default');
  const [imagesUrls, setImagesUrls] = useState([]);
  const [form] = Form.useForm();

  const calculateReducingTime = (reducingTime) => {
    const stringArrayOfReducingTime = reducingTime
      .format('HH:mm:ss')
      .split(':');
    return (
      -(-stringArrayOfReducingTime[0]) * 3600 -
      -stringArrayOfReducingTime[1] * 60 -
      -stringArrayOfReducingTime[2]
    );
  };

  const addItem = async () => {
    const {
      description,
      name,
      completionDate,
      reducingTime,
      startingPrice,
      ...rest
    } = await form.validateFields();

    const body = {
      imagesUrls: imagesUrls,
      price: startingPrice,
      completionDate:
        completionDate && completionDate.format('YYYY-MM-DD HH:mm:ss'),
      reducingTime: reducingTime && calculateReducingTime(reducingTime),
      ...rest,
      product: {
        description,
        name,
      },
    };

    console.log(body);

    const { user } = parseJwt(localStorage.getItem('token'));

    const response = await addNewAuction(user, body);

    console.log(response);
  };

  return (
    <StyledPageContainer>
      <Form form={form} onValuesChange={(values, all) => console.log(all)}>
        <StyledContentContainer>
          <AuctionItemForm
            auctionType={auctionType}
            setImagesUrls={setImagesUrls}
          />
          <AuctionType
            setAuction={setAuctionType}
            auctionType={auctionType}
            addItem={addItem}
          />
        </StyledContentContainer>
      </Form>
    </StyledPageContainer>
  );
};

export default AddAuction;
