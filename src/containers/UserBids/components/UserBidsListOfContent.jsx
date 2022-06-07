import React from 'react';
import styled from 'styled-components';
import { Avatar, List, Space } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

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

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const HomePageListOfContent = () => {
  return (
    <StyledListOfContentWrapper>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={data}
        renderItem={(item, i) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="logo" src={imgHrefs[i]} />}
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              //description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </StyledListOfContentWrapper>
  );
};

export default HomePageListOfContent;
