import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, List, Space, Typography } from 'antd';
import {
  DashboardOutlined,
  TagOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import {
  getAllUserBids,
  getAllUserBidsByCategoryWithIncludables,
} from '../../../api/bid';
import { S3config } from '../../../config';
import { parseJwt } from '../../../api/jwt';
import { Countdown } from '../../../components';

const imgHrefs = [
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?b=1&k=20&m=1294325987&s=170667a&w=0&h=MUqxtcCsnCB5SGc9YxSyRkkvZ7vKR0RJEULeEpYgv1M=',
  'https://www.picng.com/upload/laptop/png_laptop_71659.png',
];

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',

  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

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

const HomePageListOfContent = ({ activeCategory, searchContext, sortType }) => {
  const [bids, setBids] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const bidsUpdater = (res) => {
    console.log(res.data);
    if (res.data.length) {
      setBids(
        res.data.map((bid, index) => {
          return {
            sortIndex: index,
            title: bid.auction.product.name,
            href: `/details/${bid.auction.id}`,
            imgHref: bid.auction.pictures.length
              ? `${S3config.AWS_S3_PATH}${bid.auction.pictures[0].url}`
              : S3config.DEFAULT_PICTURE,
            price: bid.auction.price,
            description: (
              <strong>
                Aukcja użytkownika:{' '}
                {bid.auction.seller
                  ? bid.auction.seller.firstName
                  : 'Anonimowy'}{' '}
                {bid.auction.seller ? bid.auction.seller.lastName : ''}
              </strong>
            ),
            content: (
              <div>
                Twoja oferta
                <Typography.Title level={2}>{bid.value} PLN</Typography.Title>
                {bid.auction.product.description}
              </div>
            ),
            finishDate: new Date(bid.auction.completionDate),
          };
        })
      );
      setIsFetching(false);
    } else {
      setBids([]);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    switch (sortType) {
      case `date`:
        setBids((prev) => [
          ...prev
            .sort((a, b) => (a.finishDate > b.finishDate ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;

      case `price_desc`:
        setBids((prev) => [
          ...prev
            .sort((a, b) => (a.price < b.price ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;

      case `price_asc`:
        setBids((prev) => [
          ...prev
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .map((a, sortIndex) => ({ ...a, sortIndex })),
        ]);
        break;
      default:
        break;
    }
  }, [sortType]);

  const bidsFilter = (data) => {
    let filteredData;
    if (searchContext.search) {
      filteredData = data.filter((bid) =>
        bid.auction.title.includes(searchContext.search)
      );
    } else {
      filteredData = bids;
    }

    return filteredData;
  };

  useEffect(() => {
    setIsFetching(true);
    const token = localStorage.getItem('token');
    const { user } = parseJwt(token);
    activeCategory
      ? getAllUserBidsByCategoryWithIncludables(
          user,
          activeCategory,
          searchContext.auctionType
        ).then(bidsUpdater)
      : getAllUserBids(user, activeCategory).then(bidsUpdater);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchContext.auctionType, activeCategory]);

  useEffect(() => {
    console.log(sortType);
    console.log(bids);
    console.log(searchContext.auctionType);
    console.log(activeCategory);
  }, [bids, sortType, searchContext.auctionType, activeCategory]);

  return (
    <StyledListOfContentWrapper>
      <List
        loading={isFetching}
        itemLayout="vertical"
        size="large"
        pagination={
          bids.length && {
            pageSize: 10,
          }
        }
        dataSource={bidsFilter(bids)}
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
