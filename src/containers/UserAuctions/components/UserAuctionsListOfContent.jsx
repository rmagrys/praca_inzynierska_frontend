import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, List, Space, Typography } from 'antd';
import { DashboardOutlined, TagOutlined } from '@ant-design/icons';

import { S3config } from '../../../config';
import { Countdown } from '../../../components';

import {
  getAllUserAuctions,
  getAllUserAuctionsByCategoryIdAndQuery,
} from '../../../api/auction';
import { parseJwt } from '../../../api/jwt';

const StyledListOfContentWrapper = styled.div`
  margin: 40px 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 70%;
`;

const IconText = ({ icon, text, component }) => (
  <Space>
    {React.createElement(icon)}
    {text}
    {component}
  </Space>
);

const UserAuctionListOfContent = ({
  activeCategory,
  searchContext,
  sortType,
}) => {
  const [auctions, setAuctions] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const auctionUpdater = (res) => {
    if (res.data.length) {
      setAuctions(
        res.data.map((auction, index) => ({
          sortIndex: index,
          title: auction.product.name,
          href: `/details/${auction.id}`,
          imgHref: auction.pictures.length
            ? `${S3config.AWS_S3_PATH}${auction.pictures[0].url}`
            : S3config.DEFAULT_PICTURE,
          price: auction.price,
          description: (
            <strong>
              {auction.seller.firstName} {auction.seller.lastName} auction
            </strong>
          ),
          content: (
            <div>
              <Typography.Title level={2}>{auction.price} PLN</Typography.Title>
              {auction.product.description}
            </div>
          ),
          bids: auction.bids.length,
          finishDate: new Date(auction.completionDate),
        }))
      );
      setIsFetching(false);
    } else {
      setAuctions([]);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    switch (sortType) {
      case `date`:
        setAuctions((prev) => [
          ...prev
            .sort((a, b) => (a.finishDate > b.finishDate ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;

      case `price_desc`:
        setAuctions((prev) => [
          ...prev
            .sort((a, b) => (a.price < b.price ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;

      case `price_asc`:
        setAuctions((prev) => [
          ...prev
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;
      default:
        break;
    }
  }, [sortType]);

  const auctionFilter = (data) => {
    let filteredData;
    if (searchContext.search) {
      filteredData = data.filter((auction) =>
        auction.title.includes(searchContext.search)
      );
    } else {
      filteredData = auctions;
    }

    return filteredData;
  };

  useEffect(() => {
    setIsFetching(true);
    const token = localStorage.getItem('token');
    const { user } = parseJwt(token);
    activeCategory
      ? getAllUserAuctionsByCategoryIdAndQuery(
          user,
          activeCategory,
          searchContext.auctionType
        ).then(auctionUpdater)
      : getAllUserAuctions(user).then(auctionUpdater);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchContext.auctionType, activeCategory]);

  useEffect(() => {
    console.log(sortType);
    console.log(auctions);
    console.log(searchContext.auctionType);
    console.log(activeCategory);
  }, [auctions, sortType, searchContext.auctionType, activeCategory]);

  return (
    <StyledListOfContentWrapper>
      <List
        loading={isFetching}
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 10 }}
        dataSource={auctionFilter(auctions)}
        renderItem={(item, i) => (
          <List.Item
            key={item.sortIndex}
            actions={[
              <IconText
                icon={TagOutlined}
                text={item.bids}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={DashboardOutlined}
                component={<Countdown small finishDate={item.finishDate} />}
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="logo" src={item.imgHref} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </StyledListOfContentWrapper>
  );
};

export default UserAuctionListOfContent;
