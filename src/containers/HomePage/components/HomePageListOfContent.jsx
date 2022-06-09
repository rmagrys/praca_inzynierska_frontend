import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Avatar, List, Space, Typography, Spin, Empty } from 'antd';
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
  DashboardOutlined,
  TagOutlined,
} from '@ant-design/icons';

import { S3config } from '../../../config';
import { Countdown } from '../../../components';

import {
  getAllAuctions,
  getAllAuctionsByCategoryIdAndQuery,
} from '../../../api/auction';

const defaultHref = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR6Ap_L-a5EsSeDCIPggUn1Tz-j0jI2tBvKITwqMfRv5tZuzCs3tT-QXnwgzz4h6Iq_k&usqp=CAU`;

const StyledListOfContentWrapper = styled.div`
  margin: 20px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 70%;

  .ant-list-item-main {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
  }

  .ant-list-item-meta,
  .ant-list-item-action {
    flex-basis: 100%;
  }

  .ant-list-item {
    padding: 30px;
  }

  .ant-pagination {
    padding: 0px 20px 10px;
  }
`;

const IconText = ({ icon, text, component }) => (
  <Space>
    {React.createElement(icon)}
    {text}
    {component}
  </Space>
);

const HomePageListOfContent = ({
  activeCategory,
  searchContext,
  setItemCount,
  itemCount,
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
            : defaultHref,
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
      setItemCount(res.data.length);
      setIsFetching(false);
    } else {
      setAuctions([]);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    console.log(sortType);
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

  useEffect(() => {
    console.log(auctions);
  }, [auctions]);

  const auctionFilter = (data) => {
    let filteredData;
    if (searchContext.search) {
      filteredData = data.filter((auction) =>
        auction.title.includes(searchContext.search)
      );
    } else {
      filteredData = auctions;
    }

    setItemCount(filteredData.length);
    return filteredData;
  };

  useEffect(() => {
    setIsFetching(true);
    activeCategory
      ? getAllAuctionsByCategoryIdAndQuery(
          activeCategory,
          searchContext.auctionType
        ).then(auctionUpdater)
      : getAllAuctions().then(auctionUpdater);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchContext.auctionType, activeCategory]);

  return (
    <StyledListOfContentWrapper>
      <List
        loading={isFetching}
        itemLayout="vertical"
        size="large"
        pagination={
          itemCount && {
            pageSize: 10,
          }
        }
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

export default HomePageListOfContent;
